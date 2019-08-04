class AddColumnToCartedProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :carted_products, :comment, :text
  end
end
