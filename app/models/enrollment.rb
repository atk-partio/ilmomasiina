class Enrollment < ActiveRecord::Base
  belongs_to :event
  has_many :answers
  has_one :quota_group
end
