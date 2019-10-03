import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';


const API_URL = 'http://localhost:4000';

class Pet extends React.Component {

  handleDelete = (event) => {
    event.preventDefault();

    superagent.delete(`${API_URL}/pets/${this.props.pet._id}`)
      .then(results => {
        this.props.loadStore(results.body);
      })
      .catch(console.log);
  };

  render() {
    return (
      <li key={this.props.pet.id}>
      {this.props.pet.name}
      <button onClick={this.handleDelete}> Delete me :(</button>
    </li>);
  }
}


const mapDispatchToProps = (dispatch) => ({
  loadStore : (pets) => {
    dispatch({
      type: 'PET_LOAD',
      payload: pets,
    });
  },
});

export default connect(null, mapDispatchToProps)(Pet);
