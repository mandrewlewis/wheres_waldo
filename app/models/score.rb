class Score < ApplicationRecord
  scope :ranked, -> { order(:time) }
end
