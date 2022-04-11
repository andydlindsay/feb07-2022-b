class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :location

      t.references :game, index: true, foreign_key: true

      t.timestamps
    end
  end
end
