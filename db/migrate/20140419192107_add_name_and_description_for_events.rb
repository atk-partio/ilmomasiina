class AddNameAndDescriptionForEvents < ActiveRecord::Migration
  def change
    change_table :events do |t|
      t.string :name
      t.text :description
    end
  end
end
