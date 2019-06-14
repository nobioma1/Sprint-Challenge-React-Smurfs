import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.fetchSmurfs();
  }

  fetchSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => this.setState({ err }));
  };

  addSmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => this.setState({ smurfs: [...res.data] }))
      .catch(err => this.setState({ err }));
  };

  render() {
    return (
      <div className="App">
        {this.state.smurfs.length > 0 && (
          <React.Fragment>
            <Route
              exact
              path="/"
              render={() => <Smurfs smurfs={this.state.smurfs} />}
            />
            <Route
              path="/smurf-form"
              render={() => <SmurfForm createSmurf={this.addSmurf} />}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
