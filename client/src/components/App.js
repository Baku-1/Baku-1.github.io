import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TradePage from '../pages/TradePage';
import UserPage from '../pages/UserPage';
import NFTPage from '../pages/NFTPage';
import TokenPage from '../pages/TokenPage';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/trades" component={TradePage} />
          <Route path="/user" component={UserPage} />
          <Route path="/nft" component={NFTPage} />
          <Route path="/token" component={TokenPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
