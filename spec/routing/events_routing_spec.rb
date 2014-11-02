require 'spec_helper'

describe Api::EventsController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(get: '/api/events').to route_to("api/events#index")
    end

    it "routes to #create" do
      expect(post: '/api/events').to route_to("api/events#create")
    end

  end
end
