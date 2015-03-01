# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#  event_id   :integer
#

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :question do
    name { Faker::Lorem.sentence(1).gsub(".", "?") }
    event
  end
end
