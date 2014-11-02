class Answer < ActiveRecord::Base
  validates_presence_of :value
  belongs_to :question
  belongs_to :enrollment

  serialize :value
end
