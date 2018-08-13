class CreateCampsitePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :campsite_photos do |t|
      t.integer :campsite_id, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
