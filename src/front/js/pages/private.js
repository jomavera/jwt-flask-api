import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPrivate(store.token);
  }, []);

  return (
    <div className="text-center mt-5">
      <div className="display-4">Private Data:</div>
      <div className="display-6">{store.private}</div>
    </div>
  );
};
