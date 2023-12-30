class Score < ApplicationRecord
  validates :name, presence: true
  validates :time, presence: true
  scope :ranked, -> { where(hidden: false).order(:time) }
end
