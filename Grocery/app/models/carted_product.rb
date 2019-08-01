class CartedProduct < ApplicationRecord
  belongs_to :user
  belongs_to :order
  has_many :products 
end
