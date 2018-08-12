class AddNotNullPt2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :campsites, :description, false
    change_column_null :campsites, :daily_rate, false
    change_column_null :campsites, :state, false
    change_column_null :campsites, :city, false
    change_column_null :campsites, :picture_url, false
  end
end
