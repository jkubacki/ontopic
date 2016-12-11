defmodule Ontopic.UserChannel do
  use Ontopic.Web, :channel

  def join("users:" <> user_id, _params, socket) do
    current_user = socket.assigns.current_user

    if String.to_integer(user_id) == current_user.id do
      topics = (current_user |> Repo.preload(:topics)).topics
      {:ok, %{topics: topics}, socket}
    else
      {:error, %{reason: "Invalid user"}}
    end
  end
end
