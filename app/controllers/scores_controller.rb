class ScoresController < ApplicationController
  def list
    @scores = Score.ranked

    respond_to do |format|
      format.json { render json: @scores, only: [:id, :name, :time] }
      format.html { redirect_to root_path }
    end
  end

  def new
    @score = Score.create!(score_params)

    if @score
      render json: @score
    else
      render json: @score.errors
    end
  end

  def score_params
    params.permit(:name, :time)
  end
end
