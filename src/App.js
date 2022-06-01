import { useState } from "react";
import LoginForm from "./Loginform";
import Welcome from "./Welcome";

const administrator = {
  username: "admin",
  password: "password",
};

function App() {
  const [Error, setEror] = useState("");
  const [User, setUser] = useState({ username: "", password: "" });
  const login = (details) => {
    console.log(details);
    if (
      details.username === administrator.username &&
      details.password === administrator.password
    ) {
      console.log("Success");
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      console.log("Failed");
      setEror("Invalid Credentials! Try again");
    }
  };
  const logout = (details) => {
    console.log("logout");
    setUser({
      username: "",
      password: "",
    });
    setEror("");
  };
  return (
    <div className="App">
      {User.username !== "" ? (
        <Welcome User={User} logout={logout} />
      ) : (
        <LoginForm login={login} Error={Error} />
      )}
    </div>
  );
}

export default App;
