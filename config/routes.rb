Rails.application.routes.draw do
  root 'home#index'
  get 'game', controller: :game, action: :index
  scope :scores do
    get '/', controller: :scores, action: :list
    post '/', controller: :scores, action: :new
    delete '/', controller: :scores, action: :clear
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/*path' => 'home#index'
end
