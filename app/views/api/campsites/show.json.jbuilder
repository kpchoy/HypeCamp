json.campsite do
  json.set! @campsite.id do 
    json.partial! '/api/campsites/campsite', campsite: @campsite
  end 
end

json.campsite_photos do
  @campsite.campsite_photos.each do |campsite|
    json.set! campsite.id do
      json.extract! campsite, :id, :campsite_id, :image_url
    end
  end
end