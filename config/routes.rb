Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :campsites, only: [:index, :show, :create]
    resources :bookings, only: [:index, :show, :create, :destroy]
    resources :reviews, only: [:index, :create, :destroy]
  end

  root "static_pages#root"  
  
end
