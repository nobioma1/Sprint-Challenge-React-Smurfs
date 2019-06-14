import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

import { SmurfContainer, DeleteButton } from './styles';


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
      <DeleteButton onClick={() => props.deleteSmurf(props.id)}>
        <FaTrash />
        Delete
      </DeleteButton>
    </SmurfContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
