class AddCommentstoProducts < ActiveRecord::Migration[5.2]
  def change
  add_column :products, :comment, :text
  end
end
