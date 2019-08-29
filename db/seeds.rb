# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


 farms = ['Altamont Orchards (Albany, NY)', 'Prospect Hill Orchards (Ulster NY)', 'Samascott Orchards (Columbia, NY)', 'Kelder’s Farm (Ulster NY)', 'Sand Flat Orchard (Montgomery, NY)', 'Buhrmaster Family Farms (Schenectady NY)']
 boolean = [true, false]

100.times do 
  Product.create({item: Faker::Food.fruits, price: rand(2..10), farm: farms[rand(5)], organic: boolean[rand(2)]})
end 


User.create({name: "Adam", email: "ad@ao.com"})


 # Product.all.map do |farm|
 # 	farm.farm = farms[rand(5)]
 # 	farm.organic = boolean[rand(1)]
 # end 