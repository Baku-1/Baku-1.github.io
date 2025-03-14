import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AdminDashboard from './pages/AdministrationDashboard';
import TradesPage from './pages/TradesPage';

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user" component={UserPage} />
        <Route path="/admin_dashboard" component={AdminDashboard} />
        <Route path="/trades" component={TradesPage} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
