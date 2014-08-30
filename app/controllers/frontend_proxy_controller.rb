class FrontendProxyController < ApplicationController
  include ActionView::Layouts

  # Always use application layout
  layout "application"

  # All GET requests, which are not handled by other controllers, end up here
  def index
    render :index
  end
end
