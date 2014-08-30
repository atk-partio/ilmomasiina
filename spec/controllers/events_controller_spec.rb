require 'spec_helper'

describe EventsController, :type => :controller do

  describe "GET #index" do
    let(:events) do
      [
        build(:event, name: "Event 1"),
        build(:event, name: "Event 2"),
        build(:event, name: "Event 3"),
      ]
    end

    let(:fake_event_model) { double("Event", all: events) }

    before do
      # Mock the default Event class completely away and use our spy double
      # instead.
      stub_const("Event", fake_event_model)

      ## The other way would be to just mock the class method Event.all away and
      ## make it return our custom events, like the way below
      # expect(Event).to receive(:all).and_return(events)

      # Fire off the request
      get :index
    end

    it { is_expected.to respond_with :success }

    it "retrieves all events" do
      expect(fake_event_model).to have_received(:all).with(no_args)
    end

    it "has a correct json content type header" do
      expect(response.content_type).to eq("application/json")
    end

    describe "body" do
      subject(:output) { response.body }

      it "is valid JSON" do
        expect{ JSON.parse(output) }.not_to raise_error
      end

      it "contains all events" do
        expect(output).to be_json_eql(events.to_json)
      end
    end
  end
end
