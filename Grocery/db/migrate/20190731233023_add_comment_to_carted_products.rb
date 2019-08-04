class AddCommentToCartedProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carted_products, :comment, :text
  end
end
