import AttendanceList from "./Attendancelist";
import Navbar from "./Navbar";

const Welcome = ({ User, logout }) => {
  return (
    <div className="content">
      <div className="welcome">
        <Navbar User={User} logout={logout} />
      </div>
      <div className="attendance">
        <AttendanceList />
      </div>
    </div>
  );
};

export default Welcome;
