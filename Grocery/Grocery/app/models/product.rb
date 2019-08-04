class Product < ApplicationRecord

    belongs_to :order
    belongs_to :carted_products


end
