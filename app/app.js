import React from "react";
import { Router, Route, Link } from 'react-router';
import Greeting from "./greeting";


class User extends React.Component {
  render() {
    var { query } = this.props.location;
    var age = query && query.showAge ? '33' : '';
    var { userID } = this.props.params;
    return <div className="User">
      <Greeting name={userID} age={age} />
    </div>
  }
}


class App extends React.Component {
  render() {
    return <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user/bob">Bob</Link></li>
        <li><Link to="/user/bob" query={{showAge: true}}>Bob With Query Params</Link></li>
        <li><Link to="/user/sally">Sally</Link></li>
      </ul>
      {this.props.children}
    </div>
  }
}


React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="user/:userID" component={User} />
    </Route>
  </Router>
), document.body);
