import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem, Tabs, Tab } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Home from './home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicPage = () => (
  <Router>
    <div className="page-container">
      <div className="header">
        <div className="logo-container">LOGO</div>
        <div className="text-container">
          <div className="header-tab"><Link to="/aboutus">Profile</Link></div>
          <div className="header-tab"><Link to="/">Home</Link></div>
        </div>
      </div>
      <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/aboutus" component={About}/>
      </div>
    </div>
  </Router>
)
// profile, team, contact component

const About = ({ match }) => (
  <div className="about-container">
    <h2>Profile</h2>
    <Route path={`${match.url}/:topicId`} component={Aboutus}/>
    <Route exact path={match.url} render={() => (
      <h3>Please know about us.</h3>
    )}/>
  </div>
)

const Aboutus = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicPage;
