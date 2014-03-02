require_relative '../ilmomasiina'
require 'rack/test'

class IlmomasiinaTest < MiniTest::Unit::TestCase
  include Rack::Test::Methods

  def app
    Ilmomasiina
  end

  def test_root_returns_hello_world
    get '/'

    assert_equal 200, last_response.status
    assert_equal "Hello world!", last_response.body
  end
end
