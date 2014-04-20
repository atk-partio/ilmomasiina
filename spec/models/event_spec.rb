# == Schema Information
#
# Table name: events
#
#  id                     :integer          not null, primary key
#  created_at             :datetime
#  updated_at             :datetime
#  name                   :string(255)
#  description            :text
#  image                  :string(255)
#  date                   :datetime
#  registration_begins_at :datetime
#  registration_ends_at   :datetime
#

require 'spec_helper'

describe Event do
  # Required attributes
  it { should validate_presence_of :name }
  it { should validate_presence_of :description }
  it { should validate_presence_of :date }
  it { should validate_presence_of :registration_begins_at }
  it { should validate_presence_of :registration_ends_at }

  # Optional attributes
  it { should_not validate_presence_of :image }
end
