defmodule Ontopic.Message do
  use Ontopic.Web, :model

  schema "messages" do
    field :body, :string
    belongs_to :user, Ontopic.User
    belongs_to :topic, Ontopic.Topic

    timestamps
  end

  @required_fields ~w(body user_id topic_id)
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

  defimpl Poison.Encoder, for: Ontopic.Message do
    def encode(model, options) do
      model
      |> Map.take([:id, :body, :user])
      |> Poison.Encoder.encode(options)
    end
  end
end
