# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating the seeds..."

puts "creating the games"

10.times do
  Game.create(
    name: Faker::Games::SuperMario.game
  )
end

puts "retrieve the games from the db"

games = Game.all

puts "creating the characters"

50.times do
  Character.create(
    name: Faker::Games::SuperMario.character,
    location: Faker::Games::SuperMario.location,
    game: games.sample
  )
end

puts "all done!"
