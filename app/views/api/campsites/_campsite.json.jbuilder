json.set! campsite.id do 
  json.extract! campsite, :id, :title, :description, :daily_rate, 
  :state, :lat, :lng
end 
