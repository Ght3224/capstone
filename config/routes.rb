Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  namespace :api do
    get "/products" => "products#index"
    get '/carted_products/:id' => 'carted_products#show'
    get '/products/:id' => 'products#show'
    post '/users' => 'users#create'
    post '/sessions' => 'sessions#create'
    post '/carted_products' => 'carted_products#create'
    get '/carted_products' =>
    'carted_products#index'
    get '/users' => 'users#index'
    post '/orders' => 'orders#create'
    delete '/carted_products/:id' => 'carted_products#destroy'
    patch '/carted_products/:id' => 'carted_products#update'
    patch '/products/:id' => 'products#update'
    get '/orders' => 'orders#index'
    get '/orders/:id' => 'orders#show'
  end
end
