defmodule Ontopic.TopicView do
  use Ontopic.Web, :view

  def render("index.json", %{topics: topics}) do
    %{topics: topics}
  end
end
