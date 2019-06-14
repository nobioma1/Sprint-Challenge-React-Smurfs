import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      isEdit: false
    };
  }

  componentDidMount() {
    const isEdit = !this.props.getSmurf ? false : true;
    this.setState({ isEdit });

    if (isEdit) {
      const smurfId = this.props.match.params.id;
      const smurf = this.props.getSmurf(smurfId);
      this.setState({
        name: smurf[0].name,
        age: smurf[0].age,
        height: smurf[0].height
      });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearInput = () => {
    this.setState({
      name: '',
      age: '',
      height: '',
      err: ''
    });
  };

  addSmurf = () => {
    const newSmurf = { ...this.state };
    this.props.createSmurf(newSmurf);
    this.clearInput();
  };

  update = () => {
    const smurfId = this.props.match.params.id;
    const smurf = { ...this.state };
    this.props.updateSmurf(smurfId, smurf);
    this.clearInput();
  };

  formSubmit = e => {
    e.preventDefault();
    const emptyName = !this.state.name.trim();
    const emptyAge = !this.state.age.trim();
    const emptyHeight = !this.state.height.trim();
    if (!emptyName && !emptyAge && !emptyHeight) {
      if (this.state.isEdit) {
        this.update();
      } else {
        this.addSmurf();
      }
      this.setState({ err: '' });
    } else {
      this.setState({ err: 'All Fields are Required' });
    }
  };

  render() {
    return (
      <div className="SmurfForm">
        {this.state.err && this.state.err}
        <form onSubmit={this.formSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">
            {this.state.isEdit ? 'Save Changes' : 'Add to the village'}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
