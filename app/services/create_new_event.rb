class CreateNewEvent
  def call(event_params)
    event = Event.new(event_params)
    event.save
    event
  end
end
