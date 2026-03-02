import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login"
import EmployeeProfile, {employee} from "./EmployeeProfile"
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Dashboard";
import MarkAttendance from "./MarkAttendance";
import AttendanceReport from "./AttendanceReport";
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login employeelist = {employee}/>,
            errorElement : <ErrorPage/>
        },
        
        {
            path : "/home",
            element : <Home/>,
            errorElement : <ErrorPage/>
        },
        {
            path : "/dashboard",
            element : <Dashboard/>,
            errorElement : <ErrorPage/>
        },
        {
            path : "/Employee",
            element : <EmployeeProfile/>,
            errorElement : <ErrorPage/>
        },
        {
            path : "/markattendance",
            element : <MarkAttendance/>,
            errorElement : <ErrorPage/>
        },
        {
            path : "/attendancereport",
            element : <AttendanceReport/>,
            errorElement : <ErrorPage/>
        }
        
    ])
    return(
        <div>
            <RouterProvider router = {appRouter}/>
        </div>
    )
}
export default Body