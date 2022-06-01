const Welcome = ({ User, logout }) => {
  return (
    <div className="welcome">
      <h2>
        Welcome, <span>{User.username}</span>
      </h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Welcome;
