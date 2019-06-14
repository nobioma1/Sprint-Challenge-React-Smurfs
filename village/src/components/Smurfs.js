import React, { Component } from 'react';

import Smurf from './Smurf';
import { SmurfsDiv, SmurfsContainer } from './styles';

class Smurfs extends Component {
  render() {
    return (
      <SmurfsDiv>
        <h1>Smurfs</h1>
        <SmurfsContainer>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                editSmurf = {this.props.editSmurf}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </SmurfsContainer>
      </SmurfsDiv>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
