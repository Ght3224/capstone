class CartedProduct < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :order, optional: true
  belongs_to :product 
end
