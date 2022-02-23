import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">JWT Flask Auth</span>
        </Link>
        <div className="ml-auto">
          {!store.token ? (
            <div>
              <Link to="/private">
                <button className="btn btn-primary m-1">Private</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary m-1">Log in</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary m-1">Signup</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/private">
                <button className="btn btn-primary m-1">Private</button>
              </Link>
              <button
              onClick={() => actions.logout()}
              className="btn btn-primary"
            >
              Log out
            </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
