class AddQuantity < ActiveRecord::Migration[5.2]
  def change
    add_column :carted_products, :quantity, :integer
  end
end
