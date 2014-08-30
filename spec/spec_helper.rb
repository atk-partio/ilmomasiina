# -*- encoding : utf-8 -*-
require 'simplecov'

require 'coveralls'
Coveralls.wear!

# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
# require 'rspec/autorun' # not compatible with zeus

# Requires supporting ruby files with custom matchers and macros, etc,
# in spec/support/ and its subdirectories.
Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

RSpec.configure do |config|
  # ## Mock Framework
  #
  # If you prefer to use mocha, flexmock or RR, uncomment the appropriate line:
  #
  # config.mock_with :mocha
  # config.mock_with :flexmock
  # config.mock_with :rr
  config.mock_with :rspec do |mocks|
    # rspec-mocks 3.0.0 semantics
    mocks.yield_receiver_to_any_instance_implementation_blocks = true
  end

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

  # If true, the base class of anonymous controllers will be inferred
  # automatically. This will be the default behavior in future versions of
  # rspec-rails.
  config.infer_base_class_for_anonymous_controllers = false

  # Run specs in random order to surface order dependencies. If you find an
  # order dependency and want to debug it, you can fix the order by providing
  # the seed, which is printed after each run.
  #     --seed 1234
  config.order = "random"

  # Print colored output when using a tty by default
  config.color = true

  # Use Capybara
  # config.include Capybara::DSL

  # Set Capybara to use poltergeist for javascript scenarios
  # require 'capybara/poltergeist'
  # Capybara.javascript_driver = :poltergeist

  # Use FactoryGirl
  config.include FactoryGirl::Syntax::Methods

  # Matchers for JSON
  config.include JsonSpec::Helpers

  # Set locale for Faker
  # Faker::Config.locale = :fi

  # Matchers for Paperclip
  # require 'paperclip/matchers'
  # config.include Paperclip::Shoulda::Matchers

  # Email matchers
  # config.include EmailSpec::Helpers
  # config.include EmailSpec::Matchers
end
