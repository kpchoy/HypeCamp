class CampsiteDescriptionToText < ActiveRecord::Migration[5.2]
  def change
    change_column :campsites, :description, :text
  end
end
