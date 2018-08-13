class RemovePhotoUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :campsites, :picture_url

  end
end
