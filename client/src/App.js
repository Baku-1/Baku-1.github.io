import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TradePage from './pages/TradePage';
import UserPage from './pages/UserPage';
import NFTPage from './pages/NFTPage';
import TokenPage from './pages/TokenPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/trades" component={TradePage} />
        <Route path="/users" component={UserPage} />
        <Route path="/nfts" component={NFTPage} />
        <Route path="/tokens" component={TokenPage} />
      </Switch>
    </Router>
  );
};

export default App;
