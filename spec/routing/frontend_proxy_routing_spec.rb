require 'spec_helper'

describe FrontendProxyController, :type => :routing do
  describe "routing" do
    it "GET / routes to #index" do
      expect(get: '/').to route_to("frontend_proxy#index")
    end

    it "GET /anything/not/in/api routes to #index" do
      expect(get: '/anything/not/in/api').to route_to("frontend_proxy#index", path: 'anything/not/in/api')
      expect(get: '/api').not_to route_to("frontend_proxy#index")
    end
  end
end
