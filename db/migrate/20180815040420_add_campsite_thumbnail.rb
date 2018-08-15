class AddCampsiteThumbnail < ActiveRecord::Migration[5.2]
  def change
    add_column :campsites, :thumbnail, :string
  end
end
