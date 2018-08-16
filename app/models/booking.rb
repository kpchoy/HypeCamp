class Booking < ApplicationRecord
  validates :campsite_id, :guest_id, :guests, :check_in, :check_out, presence: true 

  belongs_to :user,
    foreign_key: :guest_id,
    class_name: :User 
end
