class User < ApplicationRecord
  has_many :carted_products
  has_secure_password
end
