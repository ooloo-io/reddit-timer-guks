import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Theme from './shared/styles/theme.styles';
import GlobalStyle from './shared/styles/global.styles';
import { AppWrapper, AppMainWrapper } from './App.styles';

function App() {
  return (
    <Theme>
      <AppWrapper>
        <GlobalStyle />
        <Router>
          <Header />
          <AppMainWrapper>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/search" exact>
                <Search />
              </Route>
              <Redirect to="/" />
            </Switch>
          </AppMainWrapper>
          <Footer />
        </Router>
      </AppWrapper>
    </Theme>
  );
}

export default App;
