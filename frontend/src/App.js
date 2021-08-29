import React from 'react';
import axios from 'axios';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>demo page</h1>
      <p>backend base: {window.BACKEND_BASE}</p>
      <p>{props.message}</p>
    </div>
  );
}

let hoc = WrappedComponent => {
  return class EnhancedComponent extends React.Component {
    constructor() {
      super();
      this.state = { message: 'empty' };
    }

    async componentDidMount() {
      let resp = await axios.get('http://localhost:9000');
      this.setState({ message: resp.data });
    }

    render() {
      console.log('render', this.state.message);
      return <WrappedComponent message={this.state.message} />;
    }
  };
};

export default hoc(App);
