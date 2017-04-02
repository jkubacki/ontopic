defmodule Ontopic.UserChannel do
  use Ontopic.Web, :channel
  alias Ontopic.{Repo, User, Topic, UserTopic}

  def join("users:" <> user_id, _params, socket) do
    current_user = socket.assigns.current_user

    if String.to_integer(user_id) == current_user.id do
      topics = (current_user |> Repo.preload(:topics)).topics
      {:ok, %{topics: Enum.reverse(topics), topic_id: current_user.topic_id}, socket}
    else
      {:error, %{reason: "Invalid user"}}
    end
  end

  def handle_in("topic:new", payload, socket) do
    user = Repo.get!(User, socket.assigns.current_user.id)
    topic_changeset = Topic.changeset(%Topic{}, %{name: payload["topic"]})
    topic = Repo.insert!(topic_changeset)
    user_topic_changeset = UserTopic.changeset(%UserTopic{}, %{user_id: user.id, topic_id: topic.id})
    Repo.insert!(user_topic_changeset)

    broadcast socket, "topic:created", %{topic: topic, user_id: user.id}

    {:noreply, socket}
  end

  def handle_in("topic:leave", payload, socket) do
    Repo.get_by!(UserTopic, user_id: socket.assigns.current_user.id, topic_id: payload["topic_id"])
    |> Repo.delete!

    broadcast socket, "topic:left", %{topic_id: payload["topic_id"]}

    {:noreply, socket}
  end
end
