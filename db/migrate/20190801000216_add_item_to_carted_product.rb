class AddItemToCartedProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :carted_products, :item, :string
  end
end
