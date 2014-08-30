# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :question do
    name { Faker::Lorem.sentence(1).gsub(".", "?") }
  end
end
