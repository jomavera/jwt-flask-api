import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");

  const handleClick = () => {
    actions.signup(email, password);
  };
  if (store.token && store.token != "" && store.token != undefined)
    history.push("/");
  return (
    <div className="containter">
      <div className="row">
        <div className="col-4 offset-3">
          <h1>Sign up</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-3">
          <div className="form-group col-2">
            <label>Email address</label>
            <input
              type="email"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="contraseña"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => handleClick()} className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
