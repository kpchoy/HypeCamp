class CreateCampsites < ActiveRecord::Migration[5.2]
  def change
    create_table :campsites do |t|
      t.integer "owner_id", null: false
      t.string "title"
      t.string "description"
      t.integer "daily_rate"
      t.string "state"
      t.string "city"
      t.float "lat"
      t.float "lng"
      t.string "picture_url"
      t.timestamps
    end
  end
end
