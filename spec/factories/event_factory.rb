# == Schema Information
#
# Table name: events
#
#  id                     :integer          not null, primary key
#  created_at             :datetime
#  updated_at             :datetime
#  name                   :string(255)
#  description            :text
#  image                  :string(255)
#  date                   :datetime
#  registration_begins_at :datetime
#  registration_ends_at   :datetime
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
    date { rand(720).days.from_now }
    registration_begins_at { date - 20.days }
    registration_ends_at { registration_begins_at + 7.days }
    questions { FactoryGirl.build_list(:question, rand(1..4)) }

    trait :with_image do
      image { Faker::Internet.url + '.jpg' }
    end

    trait :invalid do
      name { nil }
    end
  end
end
