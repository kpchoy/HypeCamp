json.campsite do
  json.partial! '/api/campsites/campsite', campsite: @campsite
  json.photoUrl url_for(campsite.photo)

end