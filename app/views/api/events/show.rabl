object @event

attributes :id,
  :name,
  :description,
  :image,
  :date,
  :registration_begins_at,
  :registration_ends_at

child(:quota_groups, object_root: false) do
  attributes :id,
    :name,
    :max_enrollees
end

child(:questions, object_root: false) do
  attributes :id,
    :name
end
