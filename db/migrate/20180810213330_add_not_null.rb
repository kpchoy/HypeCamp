class AddNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :campsites, :title, false

  end
end
