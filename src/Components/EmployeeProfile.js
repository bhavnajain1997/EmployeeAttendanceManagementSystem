  import Header from "./Header"
  export const employee = {
        employeeId : "BH0001",
        name  : "Bhavna Jain",
        department : "IT",
        designation : "Frontend Developer",
        JoiningDate : "2024-05-10" ,
        email : "Bhavna001@gmail.com",
        password: "Bhavna@1234"

    }

const EmployeeProfile = () => {
    return(
        <div className="container" style={{position: "relative", maxWidth: "90%"}}>
        <div className="row">
            <div className="col-md-3"style={{marginTop: "-0px", marginLeft: "-95px"}}><Header/></div>
                    <div className="employeecontainer col-md-9" style={{background: "white", width:"400px",padding: "30px 20px",margin: "auto", marginTop: "100px",display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
            <img src="https://avatars.githubusercontent.com/u/67094266?v=4" style={{width:"200px", borderRadius: "5px"}}/>
            <p>Employee ID : {employee.employeeId}</p>
            <p>Name : {employee.name}</p>
            <p>Department : {employee.department}</p>
            <p>Designation : {employee.designation}</p>
            <p>Joining Date : {employee.JoiningDate}</p>


        </div>

        </div>
        </div>
    )
}


export default EmployeeProfile