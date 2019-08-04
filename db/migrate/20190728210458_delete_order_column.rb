class DeleteOrderColumn < ActiveRecord::Migration[5.2]
  def change
  remove_column :orders, :product_id, :integer
  end
end
