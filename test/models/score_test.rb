require "test_helper"

class ScoreTest < ActiveSupport::TestCase
  test "cannot save without name" do
    score = Score.new(time: 123)
    assert_not score.save
  end

  test "cannot save without time" do
    score = Score.new(name: 'Capy')
    assert_not score.save
  end

  test "hidden defaults to false" do
    score = Score.new(name: 'Capy', time: 123)
    score.save
    assert_equal score.hidden, false
  end

  test "ranked scope orders time asc" do
    scores = Score.ranked
    assert scores[0].time <= scores[1].time && scores[1].time <= scores[2].time
  end
end
