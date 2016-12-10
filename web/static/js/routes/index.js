import { IndexRoute, Route }        from 'react-router';
import React                        from 'react';
import MainLayout                   from '../layouts/main';
import AuthenticatedContainer       from '../containers/authenticated';
import TopicsShowView               from '../views/topics/show';
import TopicsIndexView              from '../views/topics';
import RegistrationsNew             from '../views/registrations/new';
import SessionsNew                  from '../views/sessions/new';

export default function configRoutes(store) {
  return (
    <Route component={MainLayout}>
      <Route path="/sign_up" component={RegistrationsNew} />
      <Route path="/sign_in" component={SessionsNew} />

      <Route path="/" component={AuthenticatedContainer}>
        <IndexRoute component={TopicsIndexView} />
        <Route path="/topics/:id" component={TopicsShowView}/>
      </Route>
    </Route>
  );
}
