# == Schema Information
#
# Table name: enrollments
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  created_at :datetime
#  updated_at :datetime
#

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :enrollment do
  end
end
