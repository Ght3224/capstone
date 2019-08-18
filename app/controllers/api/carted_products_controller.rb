class Api::CartedProductsController < ApplicationController


  def index 
     # @carted_products = CartedProduct.all
    if current_user
      @carted_products = current_user.carted_products.where(status: 'carted')
    end 
    render 'index.json.jb'
  end 

  def show 
    @carted_product = CartedProduct.find_by(id: params[:id])
    render 'show.json.jb'
  end 


  def create 
    @carted_product = CartedProduct.new(
    status: 'carted',
    user_id: current_user.id, 
    product_id: params[:product_id], 
    quantity: params[:quantity], 
    order_id: params[:order_id]
    )
    @carted_product.save  
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
