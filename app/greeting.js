import React from "react";
import style from './index.css'


export default class Greeting extends React.Component {
  render() {
    return <div className="greeting">
        <h1 className={style.title}>Hello, {this.props.name}!</h1>
        <p>{this.props.age}</p>
      </div>;
  }
}
