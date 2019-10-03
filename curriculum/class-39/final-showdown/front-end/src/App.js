import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';
import Pet from './Pet';


const API_URL = 'http://localhost:4000';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    superagent.get(`${API_URL}/pets`).
      then(results => {
      this.props.loadStore(results.body);
    });
  }

  render() {
    return(
      <>
      <ul>
      {
        this.props.pets.map(pet => <Pet key={pet.id} pet={pet}/>)
      }
      </ul>
      </>);
  }
}

const mapStateToProps = (state) => ({
  pets: state.pets,
});

const mapDispatchToProps = (dispatch) => ({
  loadStore : (pets) => {
    dispatch({
      type: 'PET_LOAD',
      payload: pets,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
