# == Schema Information
#
# Table name: enrollments
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  created_at :datetime
#  updated_at :datetime
#

class Enrollment < ActiveRecord::Base
  belongs_to :event
  has_many :answers
  has_one :quota_group
end
