class CreateQuotaGroups < ActiveRecord::Migration
  def change
    create_table :quota_groups do |t|
      t.string :name
      t.integer :value

      t.references :event
      t.references :enrollment

      t.timestamps
    end
  end
end
