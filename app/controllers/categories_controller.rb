class CategoriesController < ApplicationController

# GET /categories
def index
  @categories = Category.all

  render json: @categories, include: :projects
end
end
