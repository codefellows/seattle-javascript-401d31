import React, { useState, useReducer } from "react";

import Auth from "../auth/auth.js";

import styles from "./todo.module.scss";

const initialState = {
  toDoItems: []
};

function reducer(state, action) {
  switch (action.type) {
    // case 'item':
    //   return {...state, item: action.data};
    case "toDoItems":
      return { ...state, toDoItems: action.data };
    case "toggle":
      return { ...state, toDoItems: action.data };
    default:
      throw new Error();
  }
}

function Todo(props) {
  const [itemState, setItem] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleForm = e => {
    e.preventDefault();
    e.target.reset();
    let item = { title: itemState, status: false };
    dispatch({ type: "toDoItems", data: [...state.toDoItems, item] });
  };

  const handleChange = e => {
    // dispatch( {type: 'item', data:e.target.value} );
    setItem(e.target.value);
  };

  const toggle = (e, id) => {
    e.preventDefault();
    let toDoItems = state.toDoItems.map((item, idx) =>
      idx === id ? { title: item.title, status: !item.status } : item
    );
    console.log(toDoItems);
    dispatch({ type: "toDoItems", data: toDoItems });
  };

  return (
    <section className={styles.todo}>
      <Auth capability="read">
        {state.toDoItems.map((item, idx) => (
          <div key={idx} onClick={e => toggle(e, idx)}>
            <span className={styles[`complete-${item.status}`]}>
              {" "}
              {item.title}{" "}
            </span>
          </div>
        ))}
      </Auth>

      <Auth capability="create">
        <form onSubmit={handleForm}>
          <input
            onChange={handleChange}
            name="item"
            placeholder="Add To Do List Item Here"
          />
        </form>
      </Auth>
    </section>
  );
}

// class Todo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       item: '',
//       toDoItems: []
//     }
//   }

//   handleForm = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     let item = { title:this.state.item, status:false };
//     this.setState({toDoItems:[...this.state.toDoItems, item]});
//   };

//   handleChange = (e) => {
//     this.setState( {item:e.target.value} );
//   }

//   toggle = (e,id) => {
//     e.preventDefault();
//     let toDoItems = this.state.toDoItems.map( (item,idx) =>
//       idx === id ? {title:item.title, status:!item.status} : item
//     );
//     this.setState({toDoItems});
//   };

//   render() {
//     return (
//       <section className={styles.todo}>

//         <Auth capability="read">
//           {this.state.toDoItems.map((item, idx) =>
//             <div key={idx} onClick={(e) => this.toggle(e, idx)}>
//               <span className={styles[`complete-${item.status}`]}> {item.title} </span>
//             </div>
//           )}
//         </Auth>

//         <Auth capability="create">
//           <form onSubmit={this.handleForm}>
//             <input
//               onChange={this.handleChange}
//               name="item"
//               placeholder="Add To Do List Item Here"
//             />
//           </form>
//         </Auth>

//       </section>
//     );
//   }
// };

export default Todo;
