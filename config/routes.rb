Rails.application.routes.draw do

  # API
  namespace :api, format: 'json' do
    namespace :v1 do
      namespace :auth do
        get 'status'
        post 'login'
        get 'logout'
      end
    end
  end

  # No route match redirect
  get '*path' => redirect('/')

end
