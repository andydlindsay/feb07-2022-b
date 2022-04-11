class ReviewsController < ApplicationController
  def index
    @restaurant = Restaurant.find params[:restaurant_id]
    @reviews = @restaurant.reviews
  end
end
