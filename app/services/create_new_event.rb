class CreateNewEvent
  def call(event_params)
    questions_params = event_params.delete(:questions) || []
    quota_groups_params = event_params.delete(:quota_groups) || []
    event = Event.new(event_params)
    event.questions = questions_params.map { |q_params| Question.new(q_params) }
    event.quota_groups = quota_groups_params.map { |qg_params| QuotaGroup.new(qg_params) }
    event.save
    event
  end
end
