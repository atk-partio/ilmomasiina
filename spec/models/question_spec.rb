require 'spec_helper'

RSpec.describe Question, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :event }

  # Associations
  it { is_expected.to belong_to :event}
  it { is_expected.to have_many :answers }
end
