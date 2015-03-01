class RenameQuotaGroupValue < ActiveRecord::Migration
  def change
    rename_column :quota_groups, :value, :max_enrollees
  end
end
