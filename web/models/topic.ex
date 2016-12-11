defmodule Ontopic.Topic do
  use Ontopic.Web, :model

  schema "topics" do
    field :name, :string
    has_many :user_topics, Ontopic.UserTopic
    has_many :users, through: [:user_topics, :topic]

    timestamps
  end

  @required_fields ~w(name)
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

  defimpl Poison.Encoder, for: Ontopic.Topic do
    def encode(model, options) do
      model
      |> Map.take([:id, :name])
      |> Poison.Encoder.encode(options)
    end
  end
end
