require "test_helper"

class ScoresControllerTest < ActionDispatch::IntegrationTest
  test "should get list" do
    get '/scores'
    assert_redirected_to root_url
  end

  test "should get list and return json" do
    get '/scores.json', xhr: true
    assert @response.body
  end

  test "should post new" do
    post '/scores', xhr: true, params: {
      name: 'me',
      time: 123
    }
    assert_response :ok
  end

  test "should create new score" do
    assert_difference 'Score.count' do
      post '/scores', xhr: true, params: {
        name: 'me',
        time: 123
      }
    end
  end

  test "should delete clear" do
    delete '/scores', xhr: true
    assert_response :ok
  end

  test "clear should set hidden to true" do
    count = Score.count
    delete '/scores', xhr: true
    assert count, Score.where(hidden: true)
  end
end
