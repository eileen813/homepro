# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroying everything in my tables so I start with a clean slate anytime I seed my file.  In order of child first, down to parent.
Category.destroy_all
Project.destroy_all
User.destroy_all

# create parent resource first, then child resources.  Needs at least one test user in database.
@admin = User.create!(username: 'admin', email: 'homepro@homepro.com', password: "123456")

puts "#{User.count} users created"

@paint = Project.create!(name: 'Paint', user: @admin)
@roof = Project.create!(name: 'Roof', user: @admin)
@landscape = Project.create!(name: 'Landscape', user: @admin)
@appliances = Project.create!(name: 'Appliances', user: @admin)
@flooring = Project.create!(name: 'Flooring', user: @admin)
@cabinets = Project.create!(name: 'Cabinets', user: @admin)
@general_handyman = Project.create!(name: 'General Handyman', user: @admin)
@security = Project.create!(name: 'Security', user: @admin)
@window_treatments = Project.create!(name: 'Window Treatments', user: @admin)

# array of all projects
@projects = Project.all

puts "#{Project.count} projects created"

@hvac = Category.create!(name: 'HVAC', projects: [@general_handyman, @appliances])
@plumbing = Category.create!(name: 'Plumbing', projects: @projects)
@electrical = Category.create!(name: 'Electrical', projects: @projects)
@structural = Category.create!(name: 'Structural', projects: @projects)
@demolition = Category.create!(name: 'Demolition', projects: @projects)
@tv_electronics = Category.create!(name: 'TV & Electronics', projects: @projects)
@smart_home = Category.create!(name: 'Smart Home', projects: @projects)
@assembly = Category.create!(name: 'Assembly', projects: @projects)

puts "#{Category.count} categories created"