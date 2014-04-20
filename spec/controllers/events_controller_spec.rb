require 'spec_helper'

describe EventsController do

  describe "GET #index" do

    before do
      # Fire off the request
      get :index
    end

    it { should respond_with :success }
  end
end
