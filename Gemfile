source 'https://rubygems.org'
ruby '2.1.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.5'

gem 'rails-api'

# Database
gem 'mysql2'

group :development, :test do
  gem 'guard'
  gem 'guard-rspec', require: false

  # RSpec tests
  gem 'rspec-rails', '~> 3.0'

  # Instafailing progress bar for RSpec
  gem 'rspec', '~> 3.0'
  gem 'fuubar', '>= 1.3.0'

  # One-liners to be used in specs to test common functionality easily
  gem 'shoulda-matchers'

  # Better matchers for JSON output
  gem 'json_spec'

  # Factory Girl helps you generate test data
  gem 'factory_girl_rails', '~> 4.2'

  # Preloading of Rails environments, doesn't work on Windows
  gem 'zeus', '~> 0.13', platforms: 'ruby'

  # Rails console helpers
  gem 'pry'
  gem 'pry-rails'
  gem 'pry-doc'
  gem 'pry-git'
  gem 'pry-stack_explorer'
  gem 'pry-remote'
  gem 'pry-byebug' # For ruby 2.x
  gem 'hirb'
  gem 'coolline'
  gem 'awesome_print'
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
  gem 'better_errors', '~> 2.0'

  # use REPL in error pages! Whoa! Use bleeding edge to work on jruby
  gem 'binding_of_caller'
end

group :test do
  # Support for coveralls.io
  gem 'coveralls', require: false

  # generate placeholders for factories
  gem 'faker'
end

group :production do
  # More robust web server for production usage
  gem 'unicorn'

  # Enable features such as static asset serving and logging on Heroku
  gem 'rails_12factor'
end

# Extended structure for seed files
gem 'seedbank', '~> 0.3.0'

# More expressive seeding and, in particular, updating of existing seeds
gem 'seed-fu', '~> 2.3.1'
