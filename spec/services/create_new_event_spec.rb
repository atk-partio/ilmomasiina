require 'spec_helper'

describe CreateNewEvent do
  let(:event_params) { Hash.new }
  let(:question_double) { instance_double("Question").as_null_object }
  let(:event_double) { instance_double("Event").as_null_object }
  let(:quota_group_double) { instance_double("QuotaGroup").as_null_object }

  context 'when saving succeeds' do

    before do
      allow(Event).to receive(:new) { event_double }
      allow(Question).to receive(:new) { question_double }
      allow(QuotaGroup).to receive(:new) { quota_group_double }
    end

    it 'creates a new event' do
      CreateNewEvent.new.call(event_params)
      expect(event_double).to have_received(:save)
    end

    it 'returns the created Event instance' do
      expect(CreateNewEvent.new.call(event_params)).to be(event_double)
    end

    describe 'with questions attribute' do
      let(:question_params) { attributes_for_list(:question, 2) }

      it 'creates a new question for each question' do
        expect(Question).to receive(:new).exactly(question_params.length).times { question_double }
        expect(event_double).to receive(:questions=).with(satisfy { |a| a.length == question_params.length })

        CreateNewEvent.new.call(event_params.merge(questions: question_params))
      end
    end

    describe 'with quota_groups attribute' do
      let(:quota_group_params) { attributes_for_list(:quota_group, 3) }

      it 'creates a new quota group for each quota group' do
        expect(QuotaGroup).to receive(:new).exactly(quota_group_params.length).times { quota_group_double }
        expect(event_double).to receive(:quota_groups=).with(satisfy { |a| a.length == quota_group_params.length })

        CreateNewEvent.new.call(event_params.merge(quota_groups: quota_group_params))
      end
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
