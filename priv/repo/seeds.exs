# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Ontopic.Repo.insert!(%Ontopic.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Ontopic.{Repo, User, Topic, UserTopic}

topic =
  Topic.changeset(%Topic{}, %{id: 1, name: "Shoutbox"})
  |> Repo.insert!

user =
  User.changeset(
    %User{},
     %{
      first_name: "John",
      last_name: "Doe",
      email: "john@phoenix-trello.com",
      password: "12345678",
      topic_id: topic.id
    }
  )
  |> Repo.insert!

UserTopic.changeset(%UserTopic{}, %{user_id: user.id, topic_id: topic.id})
|> Repo.insert!
