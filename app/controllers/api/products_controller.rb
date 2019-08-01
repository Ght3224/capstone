class Api::ProductsController < ApplicationController


  def index
    @products = Product.all
    render 'index.json.jb'
  end

  def show 
    @product = Product.find_by(id: params[:id])
    render 'show.json.jb'
  end 


  def update 
    @product = Product.find_by(id: params[:id])
    if @product.update(
      # order: params[:order_id], 
      comment: params[:comment]
    )
      @product.save
      render 'show.json.jb'
    else
     {:message => "Unprocessable Entity"} 
    end
  end 


end 
