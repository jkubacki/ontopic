defmodule Ontopic.Repo.Migrations.AddTopicToMessage do
  use Ecto.Migration

  def change do
    alter table(:messages) do
      add :topic_id, references(:topics, on_delete: :nothing)
    end
  end
end
