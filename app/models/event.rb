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

class Event < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :description
  validates_presence_of :date
  validates_presence_of :registration_begins_at
  validates_presence_of :registration_ends_at
end
