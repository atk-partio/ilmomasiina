module Api
  class EventsController < ApplicationController
    def index
      events = Event.all
      render json: events
    end

    # POST
    def create
      event = CreateNewEvent.new.call(event_params)
      if event.persisted?
        head :created
      else
        logger.warn(event.errors.full_messages.to_sentence)
        head :bad_request
      end
    end

    # GET
    def show
      event = Event.find(params[:id])
      render json: event
    end

    private

    def event_params
      params.require(:event).permit(:name,
        :description,
        :date,
        :registration_begins_at,
        :registration_ends_at,
        questions: [
          :name
        ],
        quota_groups: [
          :name,
          :max_enrollees
        ]
      )
    end
  end
end
