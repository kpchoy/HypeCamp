class Campsite < ApplicationRecord
  validates :title, :description, :owner_id, :daily_rate, :state, presence: true 

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

  has_many :campsite_photos
    
end
