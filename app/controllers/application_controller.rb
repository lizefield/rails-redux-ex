class ApplicationController < ActionController::API
  before_action do
    $login_user_ids = [] if $login_user_ids.blank?
  end
end
