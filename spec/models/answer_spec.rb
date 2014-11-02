require 'spec_helper'

RSpec.describe Answer, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :value }

  # Associations
  it { is_expected.to belong_to :question }

  it { should serialize(:value) }
end
