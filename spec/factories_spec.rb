 # spec/factories_spec.rb
require 'spec_helper'

FactoryGirl.factories.each do |factory|
  describe "The #{factory.name} factory" do
    subject { build(factory.name) }

    it { is_expected.to be_valid }

    factory.defined_traits.each do |trait|
      describe "with trait #{trait.name}" do
        subject { build(factory.name, trait.name) }
        if trait.name.to_sym == :invalid
          it { is_expected.to be_invalid }
        else
          it { is_expected.to be_valid }
        end
      end
    end
  end
end
