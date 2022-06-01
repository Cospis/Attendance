import { useState } from "react";
const LoginForm = ({ login, Error }) => {
  const [details, Setdetails] = useState({ username: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  return (
    //
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Please Login to Continue</h2>
        {Error !== "" ? (
          <div className="error ">
            <p>{Error}</p>
          </div>
        ) : (
          ""
        )}
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) =>
              Setdetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              Setdetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default LoginForm;
