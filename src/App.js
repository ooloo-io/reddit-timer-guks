import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

import Theme from './shared/styles/theme.styles';
import GlobalStyle from './shared/styles/global.styles';


function App() {
  return (
    <Theme>
      <div>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </Theme>
  );
}

export default App;
