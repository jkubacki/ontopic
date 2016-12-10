defmodule Ontopic.TopicController do
  use Ontopic.Web, :controller
  alias Ontopic.Topic

  def index(conn, _params) do
    topics = Repo.all(Topic)
    render(conn, "index.json", topics: topics)
  end
end
