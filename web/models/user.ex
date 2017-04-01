defmodule Ontopic.User do
  use Ontopic.Web, :model
  import Exgravatar

  schema "users" do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :encrypted_password, :string
    field :password, :string, virtual: true
    has_many :messages, Ontopic.Message
    has_many :user_topics, Ontopic.UserTopic
    has_many :topics, through: [:user_topics, :topic]
    belongs_to :topic

    timestamps
  end

  @required_fields ~w(first_name last_name email password)
  @optional_fields ~w(encrypted_password topic_id)

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 5)
    |> validate_confirmation(:password, message: "Password does not match")
    |> unique_constraint(:email, message: "Email already taken")
    |> generate_encrypted_password
  end

  defp generate_encrypted_password(current_changeset) do
    case current_changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        put_change(current_changeset, :encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        current_changeset
    end
  end

  defimpl Poison.Encoder, for: Ontopic.User do
    def encode(user, options) do
      user
      |> Map.from_struct
      |> Map.put(:gravatar, gravatar_url(user.email, secure: false))
      |> Map.take([:id, :first_name, :last_name, :gravatar])
      |> Poison.Encoder.Map.encode(options)
    end
  end
end
