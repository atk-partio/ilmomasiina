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

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :quota_group do
    name { Faker::Team.name }
    max_enrollees { rand(10..100) }
  end
end
