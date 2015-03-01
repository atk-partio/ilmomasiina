# == Schema Information
#
# Table name: quota_groups
#
#  id            :integer          not null, primary key
#  name          :string(255)
#  max_enrollees :integer
#  event_id      :integer
#  enrollment_id :integer
#  created_at    :datetime
#  updated_at    :datetime
#

require 'spec_helper'

RSpec.describe QuotaGroup, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :value }

  # Associations
end
