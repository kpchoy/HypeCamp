json.bookings do 
  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :campsite_id, :guest_id, :guests, :check_in, :check_out
    end
  end
end 

json.campsites do 
  @bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking.campsite, :id, :title, :thumbnail
    end 
  end 
end 