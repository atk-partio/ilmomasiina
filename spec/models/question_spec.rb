require 'spec_helper'

RSpec.describe Question, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :name }
end
