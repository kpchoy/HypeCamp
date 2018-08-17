class Review < ApplicationRecord
  validates :body, :author_id, :campsite_id, presence: true 
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :author, 
    foreign_key: :author_id,
    class_name: :User

  belongs_to :campsite 
end
