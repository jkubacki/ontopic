defmodule Ontopic.UserTopic do
  use Ontopic.Web, :model

  schema "user_topics" do
    belongs_to :user, Ontopic.User
    belongs_to :topic, Ontopic.Topic

    timestamps
  end

  @required_fields ~w(user_id topic_id)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
