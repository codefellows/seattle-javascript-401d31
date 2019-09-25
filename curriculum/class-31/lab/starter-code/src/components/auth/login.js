import superagent from "superagent";
import React, { useState } from "react";
import { LoginContext } from "./context.js";

const API = process.env.REACT_APP_API;

const If = props => {
  return !!props.condition ? props.children : null;
};

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [password, setPassword] = useState('');
  const handleChange = e => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        throw new Error();
    }
  };

  const handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    console.log(username, password);
    superagent
      .post(`${API}/signin`)
      .auth(username, password)
      .then(response => {
        let token = response.text;
        loginMethodFromContext(token);
      })
      .catch(console.error);
  };

  return (
    <LoginContext.Consumer>
      {context => {
        return (
          <>
            <If condition={context.loggedIn}>
              <button onClick={context.logout}>Log Out</button>
            </If>
            <If condition={!context.loggedIn}>
              <div>
                <form onSubmit={e => handleSubmit(e, context.login)}>
                  <input
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                  />
                  <input
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                  <input type="submit" value="login" />
                </form>
              </div>
            </If>
          </>
        );
      }}
    </LoginContext.Consumer>
  );
}
