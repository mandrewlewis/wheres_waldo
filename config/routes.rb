Rails.application.routes.draw do
  root 'home#index'
  get 'game', controller: :game, action: :index
  get 'scores', controller: :score, action: :scores
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
