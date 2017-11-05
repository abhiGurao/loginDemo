import React, { PropTypes } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Home from './home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicPage = () => (
  <Router>
    <div className="row">
      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
        <Tab className="homeTab tb" eventKey={1}><Link to="/">Home</Link></Tab>
        <Tab className="aboutTab tb" eventKey={2}><Link to="/aboutus">About us</Link></Tab>
      </Tabs>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/aboutus" component={About}/>
    </div>
  </Router>
)
// profile, team, contact component

const About = ({ match }) => (
  <div>
    <h2>About us</h2>
    <Tabs id="noanim-tab-example">
      <Tab className="infotab tb">
        <Link to={`${match.url}/profile`}>
          Profile
        </Link>
      </Tab>
      <Tab className="infotab tb">
        <Link to={`${match.url}/team`}>
          Team
        </Link>
      </Tab>
      <Tab className="infotab tb">
        <Link to={`${match.url}/contact`}>
          Contact
        </Link>
      </Tab>
    </Tabs>

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
