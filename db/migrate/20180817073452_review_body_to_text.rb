class ReviewBodyToText < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :body, :text 
  end
end
