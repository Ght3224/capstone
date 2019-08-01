class CreateCartedProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :carted_products do |t|
      t.string :status
      t.integer :order_id
      t.integer :product_id

      t.timestamps
    end
  end
end
