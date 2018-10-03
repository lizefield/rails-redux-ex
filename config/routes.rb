Rails.application.routes.draw do

  # API
  namespace :api, format: 'json' do
    namespace :v1 do
      namespace :auth do
        post 'login'
      end
    end
  end

end
