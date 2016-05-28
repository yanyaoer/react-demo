import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';


class App extends Component {
  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(actions.log('app.start'));
    dispatch(actions.fetch('https://google.com'));
  }

  render() {
    let { dispatch, text, items } = this.props;
    let action = bindActionCreators(actions, dispatch);

    return (
      <div>
        <button onClick={()=> action.log('button.log.click')}>log</button>

        <p>someText: {text}</p>

        <button onClick={()=> action.fetch('button.update')}>updateText: {text}</button>

        <IPAddress items={items} {...action} />
      </div>
    );
  }
};


class IPAddress extends Component {
  componentDidMount() {
    let { log, reverse } = this.props;
    log('IPAddress.start');
  }
  render() {
    let { items, reverse } = this.props;
    return (
      <div>
        {items.map((d, i)=>
          <div key={i}>item: {d}</div>
        )}
        <button onClick={reverse}>reverse</button>
      </div>
    );
  }
}

export default connect((state)=> state)(App);
