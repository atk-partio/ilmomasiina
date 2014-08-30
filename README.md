Ilmomasiina 3.0
===============

[![Build Status][build-badge]][build-url] [![Coverage Status][coverage-badge]][coverage-url] [![Code Climate][climate-badge]][climate-url] [![Dependency Status][dependency-badge]][dependency-url]

  [build-badge]: https://travis-ci.org/atk-partio/ilmomasiina.png
  [build-url]: https://travis-ci.org/atk-partio/ilmomasiina
  [coverage-badge]: https://coveralls.io/repos/atk-partio/ilmomasiina/badge.png
  [coverage-url]: https://coveralls.io/r/atk-partio/ilmomasiina
  [climate-badge]: https://codeclimate.com/github/atk-partio/ilmomasiina.png
  [climate-url]: https://codeclimate.com/github/atk-partio/ilmomasiina
  [dependency-badge]: https://gemnasium.com/atk-partio/ilmomasiina.png
  [dependency-url]: https://gemnasium.com/atk-partio/ilmomasiina

Development
-----------

### Requirements

* Ruby 2.1.2
* Bundler
* JS runtime (e.g. node.js, therubyracer, JScript)
* MySQL

#### Installing dependencies on OS X

Programs to be installed:
* Homebrew
* Ruby 2.1.2
* Bundler
* MySQL

First you must install Homebrew and then make sure your ruby version is correct.

    ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
    brew install rbenv
    brew install ruby-build
    rbenv install 2.1.2
    echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
    . ~/.bash_profile


Now `ruby -v` should output the correct version. If not, restart your terminal. After the ruby version is correct, run the following:

    gem install bundler
    rbenv rehash
    brew install mysql

The MySQL install command (`brew install mysql`) will output you information on how to setup MySQL to launch on login. Follow the instructions on the screen.

#### Installing requirements on Windows

1. Buy OS X
2. Follow instructions on for OS X

### Setup

    git clone git@github.com:atk-partio/ilmomasiina.git
    cd ilmomasiina
    bundle install
    bundle exec rake db:create

### Running

    rails s

#### OS X & Unix

Instead of running `rake` and `rails` directly, you can use the zeus gem as follows:

    zeus start
    zeus s
    zeus rake

[Zeus is a program to make your rails app boot under a second][zeus].

  [zeus]: https://github.com/burke/zeus


Other services in use
---------------------

    gem install travis
    gem install heroku
    gem install git-up
    git config --global git-up.rebase.auto false
