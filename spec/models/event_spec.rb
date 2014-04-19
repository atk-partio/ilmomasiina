# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  created_at  :datetime
#  updated_at  :datetime
#  name        :string(255)
#  description :text
#  image       :string(255)
#

require 'spec_helper'

describe Event do
  # Required attributes
  it { should validate_presence_of :name }
  it { should validate_presence_of :description }

  # Optional attributes
  it { should_not validate_presence_of :image }
end
