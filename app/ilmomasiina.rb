require 'sinatra/base'

class Ilmomasiina < Sinatra::Base
  get '/' do
    "Hello world!"
  end
end
