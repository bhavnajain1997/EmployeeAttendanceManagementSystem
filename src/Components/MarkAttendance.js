 import {employee} from "./EmployeeProfile"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 import Header from "./Header";

let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12; // 0 ko 12 me convert kar do
minutes = minutes < 10 ? '0'+minutes : minutes;

const today = new Date();
const date = today.toLocaleDateString()
const time = `${hours}:${minutes} ${ampm}`;
const MarkAttendance = () => {
  const navigate = useNavigate();
      const [status, setStatus] = useState(""); 
      const handleSubmitBtn = () => {
        const attendanceData = {
          date,
          time ,
          status,
        };
        navigate("/attendancereport", {state : attendanceData});
      }

    return(
        <div className="container markcontainer" style={{position: "relative", maxWidth: "90%"}}>
            <div className="row">
                <div className="col-md-3" style={{marginTop: "-0px", marginLeft: "-95px"}}><Header/></div>
                <div className="col-md-9" style={{background: "white", width: "400px", margin: "auto", padding: "30px 20px", display: "flex", alignItems: "center", flexDirection: "column", aligntems: "center", justifyContent: "center",gap: "14px"}}>
                <div style={{display:"flex", justifyContent:"center", gap:"100px"}}>
            <p style={{fontWeight:"bold"}}>Date : {date}</p>
            <p style={{fontWeight:"bold"}}>Time : {time}</p>
          </div>
           <div style={{display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center"}}>
            <img src="https://avatars.githubusercontent.com/u/67094266?v=4" style={{width:"200px", borderRadius: "5px", marginBottom:"20px"}}/>
            <p>Employee ID : {employee.employeeId}</p>
            <p>Name : {employee.name}</p>
            <p>Department : {employee.department}</p>
            <p>Designation : {employee.designation}</p>
            <p>Joining Date : {employee.JoiningDate}</p>
           </div>            
           <div style={{display:"flex",gap:"8px"}}>
             Status : <label htmlFor="present">Present</label>
                        <input type="radio" id="present" name="attendance"
                            value="Present" onChange={() => setStatus("Present")} />
             <label htmlFor="absent">Absent</label>
                        <input type="radio" id="absent" name="attendance"
                            value="Absent" onChange={() => setStatus("Absent")} />
             <label htmlFor="late">Late</label>
                        <input type="radio" id="late" name="attendance"
                            value="Late" onChange={() => setStatus("Late")} />
                        <label htmlFor="leave">Leave</label>
                        <input type="radio" id="leave" name="attendance"
                            value="Leave" onChange={() => setStatus("Leave")} />

           </div>  
           <div style={{width:"70%"}}>
                        <textarea
                            name="Message"
                            placeholder="Reason for Leave"
                            disabled={status !== "Leave"}   // 👈 IMPORTANT PART
                            style={{
                                width: "100%", padding: "10px", height: "100px",
                                background: status === "Leave" ? "white" : "#eee"
                            }}
                        ></textarea>
           </div>
           <div style={{width:"70%"}}>
            <button className="btn" type="submit" style={{width: "100%", maxWidth:"100%"}} onClick={handleSubmitBtn}>Submit</button>
           </div>

                </div>
            </div>
        </div>
    )
}
export default MarkAttendance