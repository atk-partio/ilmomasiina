source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.0'

gem 'rails-api'

group :development, :test do
  # SQLite database for development and testing
  gem 'sqlite3', '~> 1.3'

  gem 'guard'
  gem 'guard-rspec', require: false

  # RSpec tests
  gem 'rspec-rails', '~> 2.99.0.beta2'

  # Instafailing progress bar for RSpec
  gem 'rspec', '~> 2.99.0.beta2' # Temporary fix during beta version
  gem 'fuubar', '>= 1.3.0'

  # One-liners to be used in specs to test common functionality easily
  gem 'shoulda-matchers'

  # Factory Girl helps you generate test data
  gem 'factory_girl_rails', '~> 4.2'

  # Preloading of Rails environments, doesn't work on Windows
  gem 'zeus', '~> 0.13', platforms: 'ruby'

  # jazz_hands is an opinionated set of console-related gems and a bit of glue
  # Includes pry, addons to it
  gem 'jazz_hands', '~> 0.5'

  # Support for coveralls.io
  gem 'coveralls', require: false
end

group :development do
  # faster webserver than the default webrick
  gem 'thin', '~> 1.6'

  # warns about ineffective database queries
  gem 'bullet', '~> 4.8'

  # supresses asset output in server console
  gem 'quiet_assets', '~> 1.0'

  # gem for security testing
  # usage: run `brakeman` in root directory
  gem 'brakeman', '~> 2.4', require: false

  # Improved errors, used to display own page when an error happens
  gem 'better_errors', '~> 1.1'

  # use REPL in error pages! Whoa!
  gem 'binding_of_caller', '~> 0.7'

  # for debugging requests with rails_panel chrome extension, we need this
  # This needs to come after better_errors to be able to track failing pages as well
  gem 'meta_request', '~> 0.2'
end
