// import React from 'react';
import {Component} from 'react';

// class ClassBased extends React.Component {
class ClassBased extends Component {
  constructor() {
    super();

    this.state = {
      greeting: 'welcome to the site',
      count: 0,
      moreStuff: null
    };

    this.increment = this.increment.bind(this);
  }

  anotherFunc() {
    console.log('hello world');
  }

  increment() {
  // increment = () => {
    // don't do this
    // this.state.count = this.state.count + 1;
    this.anotherFunc();

    this.setState({ count: this.state.count + 1, moreStuff: 'hello' });
    // this.setState({ ...this.state, count: this.state.count + 1 });
  }

  render() {
    const {message} = this.props;

    return (
      <div>
        <h2>This is a class-based component</h2>
        <h2>Message: {message}</h2>
        <h2>Internal state: {this.state.greeting}</h2>

        <div>
          <h2>Counter: {this.state.count}</h2>
          {/* <button onClick={() => this.increment()}>click me!</button> */}
          <button onClick={this.increment}>click me!</button>
        </div>
      </div>
    );
  }
}

export default ClassBased;

// const component = new ClassBased(props);
// component.render();
// component.props = props;