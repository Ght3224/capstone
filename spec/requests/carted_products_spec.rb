require 'rails_helper'

RSpec.describe "CartedProduct", type: :request do
  describe "POST /carted_products" do
    it "returns an array of carted products" do

    user = User.create(name: "David", email: 'ka@ao.com', password: '123456')
    carted_product = CartedProduct.create(status: "carted", user_id: 2, quantity: 1, order_id: 99, 
    	product_id: 73)


       post '/api/carted_products'
	   products = JSON.parse(response.body)
	   expect(response).to have_http_status(200)
	   expect(products.length).to eq(1)
	end
  end



  # describe 'POST /orders' do 
  # 	it "creates an order" do 

  # 	user = User.create(name: "David", email: 'ka@ao.com', password: '123456')


  # 	 jwt = JWT.encode(
  #       {
  #         user_id: user.id, # the data to encode
  #         exp: 24.hours.from_now.to_i # the expiration time
  #       },
  #       "random", # the secret key
  #       'HS256' # the encryption algorithm
  #     )


  # 	 	post '/api/orders', params: {
  # 	 		price: 0, 
  # 	 		user_id: 2

  # 	 	}, headers: {'Authorization' => "Bearer #{jwt}"}

  # 	 	order = JSON.parse(response.body)
  # 	 	p order
  # 	 	expect(response).to have_http_status(200)
  # 	 	expect(order["price"]).to eq(0)
  # 	 end 
  # 	end 






end
