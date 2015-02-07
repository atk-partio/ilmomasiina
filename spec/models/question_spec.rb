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

require 'spec_helper'

RSpec.describe Question, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :event }

  # Associations
  it { is_expected.to belong_to :event}
  it { is_expected.to have_many :answers }
end
