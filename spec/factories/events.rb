# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  created_at  :datetime
#  updated_at  :datetime
#  name        :string(255)
#  description :text
#  image       :string(255)
#

# Read about factories at https://github.com/thoughtbot/factory_girl

require 'faker'

FactoryGirl.define do
  factory :event do
    name { Faker::Lorem.sentence }
    description do
      paragraph_count = rand(5) + 2
      Faker::Lorem.paragraphs(paragraph_count).join("\n\n")
    end

    trait :with_image do
      image { Faker::Internet.url + '.jpg' }
    end

    trait :invalid do
      name { nil }
    end
  end
end
