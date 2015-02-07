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

class Answer < ActiveRecord::Base
  validates_presence_of :value
  belongs_to :question
  belongs_to :enrollment

  serialize :value
end
