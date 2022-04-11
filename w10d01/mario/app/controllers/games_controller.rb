class GamesController < ApplicationController
  # games#index
  def index
    @games = Game.all
  end
end
