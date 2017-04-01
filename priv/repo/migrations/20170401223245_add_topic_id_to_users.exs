defmodule Ontopic.Repo.Migrations.AddTopicIdToUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :topic_id, references(:topics, on_delete: :nothing)
    end
  end
end
