import React from 'react';
import {connect} from 'react-redux';
import {createBookAction} from "../../actions/bookActions";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.name = '';
  }

  handleChange = event => {
    this.setState({name: event.target.value});
  } ;

  handleSubmit = event => {
    event.preventDefault();
    this.props.createNewBook(this.state.name,
      this.props.category.id);
    this.setState({name: ''});
  };

  render() {
    let booksJSX = null;
    if(this.props.books) {
      const {id} = this.props.category;

      const targetBooks = this.props.books[id];
      booksJSX = targetBooks.map(book => <li>{book.name}</li>);
    }
    return (
      <>
        {booksJSX}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit"> Add a book to {this.props.category.name}</button>
        </form>
        <hr/>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    books: state.books,
  };
};


const mapDispatchToProps = dispatch => {
  // Vinicio - I want a function that lets me send
  // create book actions
  return {
    createNewBook: (name, categoryId) => {
      dispatch(createBookAction(name, categoryId));
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Book);
