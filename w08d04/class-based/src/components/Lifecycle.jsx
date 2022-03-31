import {Component} from 'react';

class Lifecycle extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      interval: null
    };
  }

  // set up for the component, runs only one time
  // data fetching, setting up websockets, establishing a timer
  // useEffect(() => {}, []);
  componentDidMount() {
    console.log('the component has mounted to the DOM');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    this.setState({ interval });
  }

  // checking to see if a particular value has changed
  // useEffect(() => {}, [productId, user.name, loginId]);
  // called on after every update to state/props
  componentDidUpdate(prevProps, prevState) {
    console.log('component has updated');

    if (this.props.productId !== prevProps.productId) {
      // fetch new information
    }
  }

  // used for cleanup; called only once
  // sever a socket connection, clear an interval
  // useEffect that returns a callback
  componentWillUnmount() {
    console.log('component will be removed from the DOM');

    console.log('clearing the interval');
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>

        <div>
          <label>New username:</label>
          <input 
            value={this.state.username}
            onChange={(event) => this.setState({username: event.target.value})}
          />
          <h2>Current username: {this.state.username}</h2>
        </div>
      </div>
    );
  }
}

export default Lifecycle;
