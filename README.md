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
    brew install mysql

The MySQL install command (`brew install mysql`) will output you information on how to setup MySQL to launch on login. Follow the instructions on the screen.

##### Installing correct ruby version

If you are using **bash** as your shell (default on OS X), then run the following commands:

    echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
    . ~/.bash_profile

If you are using **zsh** and **oh-my-zsh** in your shell, add `rbenv` to your list of `plugins` in `~/.zshrc` file. rbenv will be loaded automatically.

Now `ruby -v` should output the correct version when you are at the root of this repository. If not, please double-check the instructions above and [file an issue](https://github.com/atk-partio/ilmomasiina/issues) and attach the steps you tried to do to make it work. If you happened to have `brew` already installed, please check that `brew doctor` error messages related to `PATH` are fixed.

##### Last steps on installing dependencies

Now we need to install some basic gems to get us up and running:

    gem install bundler
    rbenv rehash

If you want more extra neatness, check out [Other services in use](#other-services-in-use) (scroll down this README).


#### Installing requirements on Windows

1. Buy OS X
2. Follow instructions on for OS X

### Setup

    git clone git@github.com:atk-partio/ilmomasiina.git
    cd ilmomasiina
    bundle install
    bundle exec rake db:setup

### Running

    rails server


Other services in use
---------------------

We use gems which help us develop stuff faster. They are listed below.

    gem install travis
    gem install heroku
    gem install git-up
    gem install zeus

For `git-up` gem, you might want to stop it automatically rebasing your current branch in order to not wreak havoc when branches have diverged.

    git config --global git-up.rebase.auto false

[Zeus is a program to make your rails app boot under a second][zeus]. You can replace basic `rails` commands with the following ones to gain more speed.

    zeus start
    zeus server

  [zeus]: https://github.com/burke/zeus
