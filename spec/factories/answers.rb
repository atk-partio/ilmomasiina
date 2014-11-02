# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :answer do
    value  { Faker::Lorem.sentence(1).gsub(".") }
    question_id 1
  end
end
