defmodule Ontopic.TopicChannel do
  use Ontopic.Web, :channel
  alias Ontopic.{Repo, Message, User, Topic, UserTopic}

  def join("topics:" <> topic_id, payload, socket) do
    messages = Repo.all(from m in Message, preload: :user, where: m.topic_id == ^topic_id)
    if authorized?(payload) do
      {:ok, %{messages: messages}, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("message:new", payload, socket) do
    user = Repo.get!(User, socket.assigns.current_user.id)
    changeset = Message.changeset(%Message{}, %{body: payload["message"], user_id: user.id, topic_id: payload["topicId"]})
    case Repo.insert(changeset) do
      {:ok, message} ->
        message = Repo.one(from m in Message, where: m.id == ^message.id, preload: :user)
        broadcast socket, "message:created", %{message: message}
      {:error, _changeset} ->
        nil
    end

    {:noreply, socket}
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

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (topics:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # This is invoked every time a notification is being broadcast
  # to the client. The default implementation is just to push it
  # downstream but one could filter or change the event.
  def handle_out(event, payload, socket) do
    push socket, event, payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
