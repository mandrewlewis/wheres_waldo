class ScoreController < ApplicationController
  def scores
    @scores = Score.ranked

    respond_to do |format|
      format.json { render json: @scores, only: [:id, :name, :time] }
      format.html { redirect_to root_path }
    end
  end
end
