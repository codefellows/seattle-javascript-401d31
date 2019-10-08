import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scores: [],
      nameInput: '',
      scoreInput: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/scores')
      .then(res => res.json())
      .then(data => this.setState({ scores: data }));
  }

  handleDelete = (e, _id) => {
    e.preventDefault();
    fetch('http://localhost:4000/scores', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    }).then(res => res.json())
      .then(data => this.setState({ scores: data }));
  }

  handleAdd = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch('http://localhost:4000/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: this.state.nameInput, score: this.state.scoreInput }),
    })
      .then(response => response.json())
      .then(data => this.setState((prevState) => {
        return { scores: [...prevState.scores, data].sort((a, b) => b.score - a.score) }
      }));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>High Scores</h1>
        <ul>
          {this.state.scores.map((score, idx) => {
            return (
              <li
                key={score._id}
              >
                {idx === 0 ? <p>High Score {score.name} - {score.score}</p> : <p>{score.name} - {score.score}</p>}
                <button onClick={(e) => this.handleDelete(e, score._id)}>
                  Delete
                </button>
              </li>
            )
          }
          )}
        </ul>
        <form onSubmit={this.handleAdd}>
          <input
            name="nameInput"
            value={this.state.nameInput}
            onChange={this.handleChange}
          />
          <input
            name="scoreInput"
            value={this.state.scoreInput}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
