require 'spec_helper'

RSpec.describe QuotaGroup, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :value }

  # Associations
end
