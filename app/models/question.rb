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

class Question < ActiveRecord::Base
  validates_presence_of :name

  belongs_to :event
  has_many :answers
end
