Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', to: 'users#create'
  # get 'login', action: :create, controller: 'users'

  # resources :games
  # resources :characters

  resources :games do
    resources :characters
  end
end
