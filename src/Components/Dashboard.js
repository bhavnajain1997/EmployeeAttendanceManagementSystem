  import { useState } from "react";
  import Header from "./Header";
  const Dashboard = () => {
      const [user, setUser] = useState("Bhavna Jain");
      const [month, setMonth] = useState(new Date().getMonth() + 1);
      const [year, setYear] = useState(new Date().getFullYear());

      const getTotalDays = (month, year) => {
          return new Date(year, month, 0).getDate();

      };
    const attendanceData = {
      present: 20,
      absent: 5,
      holidays: 2,
      leaves: 3
    };

      return (
          <div className="container mt-4 navBar" style={{position: "relative", maxWidth: "90%"}}>
              <div className="row">
                <div className="col-md-3" style={{marginTop: "-20px", marginLeft: "-12px"}}><Header/></div>
              <div className="mb-4 col-md-9" style={{paddingLeft: "30px"}}>
                  <h2 className="text-white">Dashboard</h2>
              <div className="mb-4">
                  <h1 className="text-white">Welcome, {user}</h1>
              </div>
              <div className="row mb-4 g-3">
                  <div className="col-md-4">
                      <label className="form-label">Select User</label>
                      <input type="text" className="form-control" value={user} onChange={(e) => setUser(e.target.value)}></input>

                  </div>
                  <div className="col-md-4">
                      <label className="form-label">Month</label>
                      <input type="number" className="form-control" value={month} onChange={(e) => setMonth(e.target.value)} min="1" max="12"></input>

                  </div>
                  <div className="col-md-4">
                      <label className="form-label" >Year</label>
                      <input type="number" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} min="1970" max="2600"></input>

                  </div>
              </div>
              <div className="mb-4">
                  <h5 className="text-white">Month: {month}/{year} </h5>
                  <p className="text-white">Total Days in Month: {getTotalDays(month, year)}</p>
              </div>
              <div className="row text-center">
                          <div className="col-md-3 mb-3">
            <div className="card text-white p-3">
              <h5>Present</h5>
              <p className="display-6">{attendanceData.present}</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card text-white p-3">
              <h5>Absent</h5>
              <p className="display-6">{attendanceData.absent}</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card text-white p-3">
              <h5>Holidays</h5>
              <p className="display-6">{attendanceData.holidays}</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className=" card text-white p-3">
              <h5>Leaves</h5>
              <p className="display-6">{attendanceData.leaves}</p>
            </div>
          </div>
              </div>
                          </div>

              </div>
          </div>
      )
  }
  export default Dashboard 