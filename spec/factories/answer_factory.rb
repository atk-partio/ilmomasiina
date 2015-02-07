# == Schema Information
#
# Table name: answers
#
#  id            :integer          not null, primary key
#  value         :text
#  question_id   :integer
#  created_at    :datetime
#  updated_at    :datetime
#  enrollment_id :integer
#

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :answer do
    value  { Faker::Lorem.sentence(1).gsub(".") }
    question_id 1
  end
end
