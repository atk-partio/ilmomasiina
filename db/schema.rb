# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141102134256) do

  create_table "answers", force: true do |t|
    t.text     "value"
    t.integer  "question_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.text     "description"
    t.string   "image"
    t.datetime "date"
    t.datetime "registration_begins_at"
    t.datetime "registration_ends_at"
  end

  create_table "questions", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "event_id"
  end

  add_index "questions", ["event_id"], name: "index_questions_on_event_id", using: :btree

  create_table "quota_groups", force: true do |t|
    t.string   "name"
    t.integer  "value"
    t.integer  "event_id"
    t.integer  "enrollment_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
