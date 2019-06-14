import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import smurf from './assets/smurf.jpg';

import './App.css';
import { Header, MainContainer, SmurfImage } from './components/styles';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';
import ViewSmurf from './components/ViewSmurf';

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
      .then(res => {
        this.setState({ smurfs: [...res.data] });
        this.props.history.push('/');
      })
      .catch(err => this.setState({ err }));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: [...res.data] });
        this.props.history.push('/');
      })
      .catch(err => this.setState({ err }));
  };

  getSmurf = id => {
    this.fetchSmurfs();
    const smurfs = this.state.smurfs;
    return smurfs.filter(smurf => smurf.id === parseInt(id, 10));
  };

  updateSmurf = (id, updated) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, updated)
      .then(res => {
        this.setState({ smurfs: [...res.data] });
        this.props.history.push('/');
      })
      .catch(err => this.setState({ err }));
  };

  render() {
    return (
      <div className="App">
        <Header>
          <Link to="/">Smurf Village</Link>
          <Nav />
        </Header>
        <MainContainer>
          {this.state.smurfs.length > 0 && (
            <Route
              exact
              path="/"
              render={() => (
                <Smurfs
                  smurfs={this.state.smurfs}
                  editSmurf={this.updateSmurf}
                  deleteSmurf={this.deleteSmurf}
                />
              )}
            />
          )}
          <Route
            exact
            path="/smurf/:id"
            deleteSmurf={this.deleteSmurf}
            render={props => (
              <ViewSmurf
                {...props}
                getSmurf={this.getSmurf}
                deleteSmurf={this.deleteSmurf}
              />
            )}
          />
          <Route
            exact
            path="/smurf-form"
            render={() => <SmurfForm createSmurf={this.addSmurf} />}
          />
          <Route
            path="/smurf-form/:id"
            render={props => (
              <SmurfForm
                {...props}
                getSmurf={this.getSmurf}
                updateSmurf={this.updateSmurf}
              />
            )}
          />
        </MainContainer>
        <SmurfImage>
          <img src={smurf} alt="smurf" />
          {this.state.smurfs.length === 0 && (
            <h3>No Smurf Available, Add a smurf!!</h3>
          )}
        </SmurfImage>
      </div>
    );
  }
}

export default App;
