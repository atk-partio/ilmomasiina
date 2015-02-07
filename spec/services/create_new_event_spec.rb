require 'spec_helper'

describe CreateNewEvent do
  let(:event_params) { Hash.new }

  context 'when saving succeeds' do
    let(:event_double) { instance_double("Event", save: true) }

    before do
      allow(Event).to receive(:new) { event_double }
      allow(Question).to receive(:new) { question_double }
    end

    it 'creates a new event' do
      CreateNewEvent.new.call(event_params)
      expect(event_double).to have_received(:save)
    end

    it 'returns the created Event instance' do
      expect(CreateNewEvent.new.call(event_params)).to be(event_double)
    end
  end

  context 'when saving fails' do
    let!(:event) { Event.new }

    before do
      allow(Event).to receive(:new) { event }
      allow(event).to receive(:save) { false }
    end

    it 'returns the non-persisted AR object' do
      result = CreateNewEvent.new.call(event_params)
      expect(result).to be(event)
      expect(result).not_to be_persisted
    end
  end

end
