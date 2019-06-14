import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit, FaChevronCircleLeft } from 'react-icons/fa';

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
      <div className="Smurf">
        <Link to="/">
          <FaChevronCircleLeft />
          Back
        </Link>
        <h3>{this.state.name}</h3>

        <strong>{this.state.height} tall</strong>

        <p>{this.state.age} smurf years old</p>
        <Link to={`/smurf-form/${this.state.id}`}>
          <FaEdit /> Edit
        </Link>
        <button onClick={() => this.props.deleteSmurf(this.state.id)}>
          <FaTrash />
          Delete
        </button>
      </div>
    );
  }
}

export default ViewSmurf;
