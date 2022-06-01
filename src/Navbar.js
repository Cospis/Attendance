const Navbar = ({ User, logout }) => {
  const HandleSummary = (e) => {
    e.preventDefault();
    console.log(User);
  };
  return (
    <div className="navbar">
      <div className="greeting">
        <h2>
          Welcome, <span>{User.username}</span>
        </h2>
      </div>
      <div className="buttons">
        <a href="/submit">
          <button onClick={HandleSummary}>Summary</button>
        </a>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
