class Api::CampsitesController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    # campsite = bounds ? Campsite.in_bounds(bounds) : Campsite.all

    @campsites = Campsite.all 
    render :index
  end

  def show
    @campsite = Campsite.find(params[:id])
  end

  def create
    @campsite = Campsite.create!(campsite_params)
    render :show
  end

  private

  def campsite_params
    params.require(:campsite).permit(
      :title,
      :description,
      :daily_rate,
      :state, 
      :lat,
      :lng,
      :picture_url      
    )
  end

  # def bounds
  #   params[:bounds]
  # end

end
