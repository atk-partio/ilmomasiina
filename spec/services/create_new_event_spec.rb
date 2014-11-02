require 'spec_helper'

describe CreateNewEvent do
  it 'includes Service concern' do
    expect(subject.class.ancestors).to include(Service)
  end

  context 'when saving succeeds' do
    let(:event_double) { instance_double("Event", save: true) }

    before do
      allow(Event).to receive(:new) { event_double }
    end

    it 'creates a new event' do
      CreateNewEvent.call
      expect(event_double).to have_received(:save)
    end

    it 'returns the created Event instance' do
      expect(CreateNewEvent.call).to be(event_double)
    end
  end

  context 'when saving fails' do
    let!(:event) { Event.new }

    before do
      allow(Event).to receive(:new) { event }
      allow(event).to receive(:save) { false }
    end

    it 'returns the non-persisted AR object' do
      result = CreateNewEvent.call
      expect(result).to be(event)
      expect(result).not_to be_persisted
    end
  end

end
