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

@paint = Project.create!(name: 'Paint',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.anKiTzkZ1piuR5dlhYTc-QHaE8%26pid%3DApi&f=1",
  description: "Are you painting the baseboards, doorframe, or all-around interior painting?  Either way, it's a great way to make a room pop!  Exterior painting helps pull all the landscaping, and exterior features of your home all together.",
  user: @admin)
@roof = Project.create!(name: 'Roof', 
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sUG4aqvh92KCKhTjwZvFugHaEK%26pid%3DApi&f=1",
  description: "Having a water tight roof is important in a home’s structure.  Whether you’re adding a new roof, or patching up some trouble spots, you’re sure to add value to your amazing home!",
  user: @admin)
@landscape = Project.create!(name: 'Landscape',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.S6yQV8LmOUIIVdAECigRAwHaD4%26pid%3DApi&f=1",
  description: "Your front yard is one of the first things people observe as they arrive to your home, so naturally you want it to look good.  Or maybe you want to spruce up your backyard for friends and family gatherings?  Planting native plants, trees, shrubs, flowers, etc., preserve the biodiversity within your region.",
  user: @admin)
@appliances = Project.create!(name: 'Appliances',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cNpdz0Ks9l7HF7H-FgA1vQHaGF%26pid%3DApi&f=1",
  description: "There are numerous appliance styles, features, and now more than ever, smart home enabled appliances.  Choosing an appliance that fits you and your family is exciting!",
  user: @admin)
@flooring = Project.create!(name: 'Flooring',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QbsZ0GL8Kt7IiZIewdq6SwHaFL%26pid%3DApi&f=1",
  description: "Tile?  Wood-like tile?  Carpet?  So many options!  Oh my!  Once you decide on your flooring type, then you get to choose color and style.  The look and feel of new flooring can enhance your mood, feel cozier, and reduces allergens.",
  user: @admin)
@cabinets = Project.create!(name: 'Cabinets',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bkbIyx0FBoqQtwRhkHO0mAHaE8%26pid%3DApi&f=1",
  description: "Whether you're refinishing your current cabinets, or installing new cabinets all together, you'll be amazed how the transformation gives the room an all-new look and feel!",
  user: @admin)
@general_handyman = Project.create!(name: 'General Handyman',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0PFv0kmfh8ZHe68JtrakjAHaCo%26pid%3DApi&f=1",
  description: "Have some general projects to do such as drywall repair, furniture assembly, TV mounting, gutter install/cleaning, and more?  You're in the right place!",
  user: @admin)
@security = Project.create!(name: 'Security',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7rDWXUlHMDKeVV-Ix8K4FQHaE8%26pid%3DApi&f=1",
  description: "The benefits of a home security system is widely beneficial in protecing you, your family, and your valuables.  There are plenty of options on the market, and looking at each company's fees, false alarm conflicts, monitoring service, etc., can help you narrow down your options.",
  user: @admin)
@window_treatments = Project.create!(name: 'Window Treatments',
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AQwDJdDA0rnGBPGPryZRBwHaFB%26pid%3DApi&f=1",
  description: "Ah, window treatments!  The joy of being able to push a button, and roller shades come sliding down, or up.  There are many options, colors, and styles to choose from.  You can find a unique style that fits your windows perfectly from blinds, shades, shutters, curtains, and more!",
  user: @admin)

# array of all projects
@projects = Project.all

puts "#{Project.count} projects created"

@hvac = Category.create!(name: 'HVAC', projects: [@general_handyman])
@plumbing = Category.create!(name: 'Plumbing', projects: [@general_handyman, @appliances])
@electrical = Category.create!(name: 'Electrical', projects: [@general_handyman, @appliances, @security])
@structural = Category.create!(name: 'Structural', projects: [@roof, @flooring])
@demolition = Category.create!(name: 'Demolition', projects: [@roof, @cabinets, @flooring, @landscape])
@tv_electronics = Category.create!(name: 'TV & Electronics', projects: [@general_handyman, @security])
@smart_home = Category.create!(name: 'Smart Home', projects: [@security, @appliances])
@installation = Category.create!(name: 'Installation', projects: [@roof, @cabinets, @flooring, @security, @window_treatments, @landscape])
@interior = Category.create!(name: 'Interior', projects: [@paint, @security])
@exterior = Category.create!(name: 'Exterior', projects: [@paint, @security])
@maintenance = Category.create!(name: 'Maintenance', projects: [@landscape, @roof, @appliances])

puts "#{Category.count} categories created"