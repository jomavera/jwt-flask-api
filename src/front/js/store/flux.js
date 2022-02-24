const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: "",
      email: "",
      private: "",
    },
    actions: {
      // Use getActions to call a function within a fuction
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined) {
          setStore({ token: token });
        }
      },

      login: async (email, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "https://3001-4geeksacademy-reactflask-kmcp0yf172j.ws-us33.gitpod.io/api/login",
            options
          );
          if (resp.status != 200) {
            alert("Can't log in! Try again");
            return false;
          }
          const data = await resp.json();

          sessionStorage.setItem("token", data.token);
          setStore({ token: data.token, email: data.email });
        } catch (error) {
          console.error("There has been an error!");
        }
      },

      signup: async (email, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "https://3001-4geeksacademy-reactflask-kmcp0yf172j.ws-us33.gitpod.io/api/signup",
            options
          );
          if (resp.status != 200) {
            alert("Can't sign up! Try again");
            return false;
          }
          const data = await resp.json();

          sessionStorage.setItem("token", data.token);
          setStore({ token: data.token });
        } catch (error) {
          console.error("There has been an error!");
        }
      },

      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null, email: "", private: "" });
      },
      getPrivate: async (token) => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        try {
          const resp = await fetch(
            "https://3001-4geeksacademy-reactflask-kmcp0yf172j.ws-us33.gitpod.io/api/private",
            options
          );
          if (!resp.ok) {
            alert("There was a problem in the login request");
            return false;
          } else if (resp.status === 403) {
            alert("Missing or invalid token");
            return false;
          }
          const data = await resp.json();

          setStore({ private: data.mensaje });
        } catch (error) {
          console.error("There has been an error!");
        }
      },
    },
  };
};

export default getState;
