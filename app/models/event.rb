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

class Event < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :description
end
