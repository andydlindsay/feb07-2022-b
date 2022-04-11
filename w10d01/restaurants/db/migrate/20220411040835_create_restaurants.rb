class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :restaurant_type
      t.string :description
      t.timestamps
    end
  end
end
