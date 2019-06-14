import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

import { SmurfContainer, StyledButton } from './styles';


const Smurf = props => {
  return (
    <SmurfContainer>
      <h3>
        <Link to={`/smurf/${props.id}`}>{props.name}</Link>
        <Link to={`/smurf-form/${props.id}`}>
          <FaEdit />
        </Link>
      </h3>

      <strong>{props.height} tall</strong>

      <p>{props.age} smurf years old</p>
      <StyledButton delete onClick={() => props.deleteSmurf(props.id)}>
        <FaTrash />
        Delete
      </StyledButton>
    </SmurfContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
