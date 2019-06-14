import React, { Component } from 'react';
import { FaTrash, FaEdit, FaChevronCircleLeft } from 'react-icons/fa';

import { SmurfDiv, StyledButton, StyledLink } from './styles';

class ViewSmurf extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    const smurfId = this.props.match.params.id;
    const smurf = this.props.getSmurf(smurfId);
    this.setState({
      id: smurfId,
      name: smurf[0].name,
      age: smurf[0].age,
      height: smurf[0].height
    });
  }

  render() {
    return (
      <SmurfDiv>
        <StyledLink to="/">
          <FaChevronCircleLeft />
          Back
        </StyledLink>
        <h3>Name: {this.state.name}</h3>

        <strong>Height: {this.state.height} tall</strong>

        <p>Age: {this.state.age} smurf years old</p>
        <StyledLink to={`/smurf-form/${this.state.id}`}>
          <FaEdit /> Edit
        </StyledLink>
        <StyledButton delete onClick={() => this.props.deleteSmurf(this.state.id)}>
          <FaTrash />
          Delete
        </StyledButton>
      </SmurfDiv>
    );
  }
}

export default ViewSmurf;
