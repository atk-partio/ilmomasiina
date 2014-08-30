require 'spec_helper'

describe FrontendProxyController, :type => :controller do

  describe "GET #index" do
    it "renders the index template" do
      get :index
      expect(response).to render_template(:index)
    end

    it "responds with success" do
      get :index
      expect(response.status).to be(200)
    end
  end
end
