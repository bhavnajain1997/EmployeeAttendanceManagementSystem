import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({employeelist}) => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickBtn = (e) => {
           if(email === employeelist.email && password === employeelist.password){
            navigate("/home")
    }
    else{
        alert("Invalid email or password");
    }

    }
    return(
        <div className="loginsection">
        <div className="sec-title text-center   ">
            <h1 >Employee Attendance System</h1>
        </div>
           <div className="formsection">           
           <form>
                <h2 className="text-center">Sign In | Admin</h2>
                <label htmlFor="email">Username</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder="Password"/>
                <p>Forget Password?</p>
                <button className="btn mx-auto d-flex" onClick={handleClickBtn}>Sign In</button>
            </form>
             </div>
 
        </div>
    )
}
export default Login