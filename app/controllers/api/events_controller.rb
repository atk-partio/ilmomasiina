module Api
  class EventsController < ApplicationController
    def index
      events = Event.all
      render json: events
    end

    # POST
    def create
      event = CreateNewEvent.call
      if event.persisted?
        head :created
      else
        logger.warn(event.errors.full_messages.to_sentence)
        head :bad_request
      end
    end
  end
end
