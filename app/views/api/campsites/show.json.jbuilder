json.campsite do
  json.set! @campsite.id do 
    json.partial! '/api/campsites/campsite', campsite: @campsite
    json.extract! @campsite.user, :first_name
  end 
end

json.campsite_photos do
  @campsite.campsite_photos.each do |campsite|
    json.set! campsite.id do
      json.extract! campsite, :id, :campsite_id, :image_url
    end
  end
end

json.reviews do 
  @campsite.reviews.each do |review|
    json.set! review.id do 
      json.extract! review, :id, :body, :campsite_id, :rating
      json.extract! review.author, :first_name 
    end 
  end 
end 