# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  created_at  :datetime
#  updated_at  :datetime
#  name        :string(255)
#  description :text
#

require 'spec_helper'

describe Event do
  it { should validate_presence_of :name }
  it { should validate_presence_of :description }
end
