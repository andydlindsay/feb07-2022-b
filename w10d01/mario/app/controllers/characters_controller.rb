class CharactersController < ApplicationController
  def index
    @game = Game.find params[:game_id]
    @characters = @game.characters

    render json: {
      game: @game,
      characters: @characters
    }
  end
end
