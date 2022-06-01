import { useState } from "react";

const AttendanceList = () => {
  const [Date, SetDate] = useState("");
  const [Brothers, SetBrothers] = useState(0);
  const [Sisters, SetSisters] = useState(0);
  const [Visitors, SetVisitors] = useState(0);
  const [error, Seterror] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const attendance = { Date, Brothers, Sisters, Visitors };
    console.log(attendance);
    if (Date === "" || Brothers === 0 || Sisters === 0) {
      alert("Please check all details");
      Seterror("Failed");
      return;
    } else {
      fetch(
        "http://localhost:8000/Attendance",
        {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(attendance),
        },
        Seterror("Saving")
      ).then(() => {
        console.log("New Entry Added");
        Seterror("Saved!");
        alert("Attendance Recorded Successfully, you can logout now");
        SetBrothers(0);
        SetSisters(0);
        SetVisitors(0);
        SetDate("");
      });
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <h2>Please enter attendance details </h2>
          {error !== "" ? (
            <div className="error ">
              <p>{error}</p>
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={(e) => SetDate(e.target.value)}
              value={Date}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brothers">Brothers: </label>
            <input
              type="number"
              min="0"
              name="brothers"
              id="brothers"
              onChange={(e) => SetBrothers(e.target.value)}
              value={Brothers}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sisters">Sisters: </label>
            <input
              type="number"
              min="0"
              name="sisters"
              id="sisters"
              onChange={(e) => SetSisters(e.target.value)}
              value={Sisters}
            />
          </div>
          <div className="form-group">
            <label htmlFor="visitors">Visitors: </label>
            <input
              type="number"
              min="0"
              name="visitors"
              id="visitors"
              onChange={(e) => SetVisitors(e.target.value)}
              value={Visitors}
            />
          </div>
          <input type="submit" value="SAVE" />
        </div>
      </form>
    </div>
  );
};

export default AttendanceList;
