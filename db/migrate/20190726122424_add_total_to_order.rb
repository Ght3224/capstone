class AddTotalToOrder < ActiveRecord::Migration[5.2]
  def change
        add_column :orders, :total, :integer
  end
end
