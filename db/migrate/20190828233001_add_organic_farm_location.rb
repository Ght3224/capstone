class AddOrganicFarmLocation < ActiveRecord::Migration[6.0]
  def change
  	add_column :products, :farm, :string 
  	add_column :products, :organic, :boolean
  end
end
