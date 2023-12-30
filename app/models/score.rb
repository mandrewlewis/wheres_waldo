class Score < ApplicationRecord
  scope :ranked, -> { where(hidden: false).order(:time) }
end
