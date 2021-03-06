class Api::CartedProductsController < ApplicationController


  def index 
     # @carted_products = CartedProduct.all
    @carted_products = CartedProduct.where(status: 'carted') 
    render 'index.json.jb'
  end 

  def show 
    @carted_product = CartedProduct.find_by(id: params[:id])
    render 'show.json.jb'
  end 


  def create 
    @carted_product = CartedProduct.new(
    status: 'carted',
#friedman
    user_id: User.find_by(name: "Adam"), 
    # user_id: User.find_by_email('ad@ao.com').id, 
#master
    product_id: params[:product_id], 
    quantity: params[:quantity], 
    order_id: params[:order_id]
    )
    @carted_product.save!
    render 'show.json.jb'
  end 


  def update 
    @carted_product = CartedProduct.find_by(id: params[:id])
    if @carted_product.update(
      # order: params[:order_id], 
      quantity: params[:quantity],
      comment: params[:comment]
    )
      @carted_product.save
      render 'show.json.jb'
    else
     {:message => "Unprocessable Entity"} 
    end
  end 


 def destroy 
    @carted_product = CartedProduct.find_by(id: params[:id])
    # @carted_product.status = 'removed'
    # @carted_product.save 
    render json: {message: 'you have removed item from the cart'}
    @carted_product.destroy!
 end 
end
