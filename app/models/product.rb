class Product < ApplicationRecord
    has_many :carted_products

    # def similiarlyPricedProducts
    #   Product.where(price: self.price)[0..3]
    # end 
end
