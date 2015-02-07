class CreateNewEvent
  def call(event_params)
    questions_params = event_params.delete(:questions) || []
    event = Event.new(event_params)
    event.questions = questions_params.map { |q| Question.new(q) }
    event.save
    event
  end
end
