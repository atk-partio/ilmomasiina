class CreateNewEvent
  include Service

  def initialize(event_params = nil)
    @event_params = event_params
  end

  def call
    event = Event.new(@event_params)
    event.save
    event
  end
end
