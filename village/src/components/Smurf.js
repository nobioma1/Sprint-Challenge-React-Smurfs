import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>
        <Link to={`/smurf/${props.id}`}>{props.name}</Link>
        <Link to={`/smurf-form/${props.id}`}>
          <FaEdit />
        </Link>
      </h3>

      <strong>{props.height} tall</strong>

      <p>{props.age} smurf years old</p>
      <FaEdit />
      <button onClick={() => props.deleteSmurf(props.id)}>
        <FaTrash />
        Delete
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
