json.set! @booking.id do 
  json.extract! booking, :campsite_id, :guest_id, :guests, :check_in, :check_out
end 
