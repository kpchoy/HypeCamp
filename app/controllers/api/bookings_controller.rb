class Api::BookingsController < ApplicationController

  def create 
    @booking = current_user.bookings.new(booking_params)
    if @booking.save 
      render :show 
    else
      render json: @booking.errors.full_messages, status: 422
    end 
  end 

  def show 
    @booking = Booking.find(params[:id])
  end 

  def index
    @bookings = current_user.bookings 
  end 

  def destroy  
    @booking = Booking.find(params[:id])
   
    if @booking.destroy 
      render :show 
    else 
      render json: @booking.errors.full_messages, status: 422
    end 
  end 

  private 
  def booking_params 
    params.require(:booking).permit(:campsite_id, :guest_id, :guests, :check_in, :check_out)
  end 

end
