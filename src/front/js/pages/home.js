import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  if (store.token && store.token != "" && store.token != undefined) {
    return (
      <div className="text-center mt-5">
        <h1>Welcome {store.email}!</h1>
      </div>
    );
  } else {
    return (
      <div className="text-center mt-5">
        <h1>Welcome !</h1>
        <div className="display-6">Please sign in or log in</div>
      </div>
    );
  }
};
