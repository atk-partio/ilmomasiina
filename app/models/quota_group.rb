# == Schema Information
#
# Table name: quota_groups
#
#  id            :integer          not null, primary key
#  name          :string(255)
#  max_enrollees :integer
#  event_id      :integer
#  enrollment_id :integer
#  created_at    :datetime
#  updated_at    :datetime
#

class QuotaGroup < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :max_enrollees
end
