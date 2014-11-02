class Answer < ActiveRecord::Base
  validates_presence_of :value
  belongs_to :question

  serialize :value
end
