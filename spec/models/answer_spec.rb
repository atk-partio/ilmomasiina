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

require 'spec_helper'

RSpec.describe Answer, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :value }

  # Associations
  it { is_expected.to belong_to :question }
  it { is_expected.to belong_to :enrollment }


  it { should serialize(:value) }
end
