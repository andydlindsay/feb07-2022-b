class CharactersController < ApplicationController
  def index
    @game = Game.find params[:game_id]
    @characters = @game.characters
  end
end
