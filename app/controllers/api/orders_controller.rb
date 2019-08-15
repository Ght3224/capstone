class Api::OrdersController < ApplicationController


  def index 
    @order = Order.all
    render 'index.json.jb'
  end 

  def show 
    @order = Order.find(params[:id])
    render 'show.json.jb'
  end

  def create 


    @carted_products = current_user.carted_products.where(status: 'carted')
    # subtotal = 0 
    # tax = 0
    # total = 0 

    # @carted_products.each do |carted_product|
    #   total += carted_product.quantity *carted_product.product.price
    # end 
     prices = @carted_products.map{|carted_product|carted_product.product.price}
     quantities = @carted_products.map{|carted_product| carted_product.quantity}

    i,total = 0, [] 
    while i < prices.length 
      total << prices[i] * quantities[i]
      i+=1
    end 

     total = total.reduce(:+)


    @order = Order.new(
         price: total, 
         user_id: current_user.id
         # quantity: quantities
      )

     @order.save!


    @carted_products.update(status: 'purchased', order_id: @order.id)

    render 'show.json.jb'


  end 
end
