class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy, :add_category_to_project]
  # must be logged in for a user to create, update, and destroy a project.
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects, include: :categories
  end

  # GET /projects/1
  def show
    render json: @project, include: :categories
  end

  # POST /projects
   def create
    @project = Project.new(project_params.except(:categories))

    @project.user = @current_user

    if @project.save
      @categories=Category.find(project_params[:categories].map {|c| c[:id]})
      @project.categories = @categories
      render json: @project, status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params.except(:categories))
      @categories=Category.find(project_params[:categories].map {|c| c[:id]})
      @project.categories = @categories
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
  end

  #adding category to project method
  def add_category_to_project
    @category = Category.find(params[:category_id])

    @project.categories << @category
  # returns the preset list of categories, plus the newly added category.
    render json: @project, include: :categories

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:name, :image_url, :description, categories: [:id, :name, :created_at, :updated_at])
    end
end
