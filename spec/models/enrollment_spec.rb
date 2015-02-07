# == Schema Information
#
# Table name: enrollments
#
#  id         :integer          not null, primary key
#  event_id   :integer
#  created_at :datetime
#  updated_at :datetime
#

require 'spec_helper'

RSpec.describe Enrollment, :type => :model do
  # Required attributes

  # Associations
  it { is_expected.to belong_to :event }
  it { is_expected.to have_many :answers }
  it { is_expected.to have_one :quota_group }
end
