require 'spec_helper'

RSpec.describe Enrollment, :type => :model do
  # Required attributes

  # Associations
  it { is_expected.to belong_to :event }
  it { is_expected.to have_many :answers }
  it { is_expected.to have_one :quota_group }
end
