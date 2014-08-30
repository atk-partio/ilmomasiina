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

describe Event, :type => :model do
  # Required attributes
  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :description }
  it { is_expected.to validate_presence_of :date }
  it { is_expected.to validate_presence_of :registration_begins_at }
  it { is_expected.to validate_presence_of :registration_ends_at }

  # Optional attributes
  it { is_expected.not_to validate_presence_of :image }
end
