# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running seeds..."

puts "creating restaurants"
20.times do
  Restaurant.create(
    name: Faker::Restaurant.name,
    restaurant_type: Faker::Restaurant.type,
    description: Faker::Restaurant.description
  )
end

puts "retrieve restaurants"
restaurants = Restaurant.all

puts "creating reviews"
100.times do
  Review.create(
    review: Faker::Restaurant.review,
    restaurant: restaurants.sample
  )
end

puts "all done!"
