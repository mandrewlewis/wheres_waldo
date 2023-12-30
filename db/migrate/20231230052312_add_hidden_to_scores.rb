class AddHiddenToScores < ActiveRecord::Migration[7.0]
  def change
    add_column :scores, :hidden, :boolean, null: false, default: false
  end
end
