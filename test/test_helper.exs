ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Ontopic.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Ontopic.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Ontopic.Repo)

