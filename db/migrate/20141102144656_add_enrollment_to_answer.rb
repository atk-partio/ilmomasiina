class AddEnrollmentToAnswer < ActiveRecord::Migration
  def change
    add_column :answers, :enrollment_id, :integer

    add_index :answers, :enrollment_id
  end
end
