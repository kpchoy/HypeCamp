class CampsitePhoto < ApplicationRecord
  validates :campsite_id, :image_url, presence: true
  
  belongs_to :campsite
  
end
