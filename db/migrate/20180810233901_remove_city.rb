class RemoveCity < ActiveRecord::Migration[5.2]
  def change
    remove_column :campsites, :city
  end
end
