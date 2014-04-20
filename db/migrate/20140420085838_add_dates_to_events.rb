class AddDatesToEvents < ActiveRecord::Migration
  def change
    add_column :events, :date, :datetime
    add_column :events, :registration_begins_at, :datetime
    add_column :events, :registration_ends_at, :datetime
  end
end
