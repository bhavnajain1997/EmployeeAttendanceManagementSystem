import Header from "./Header";
import { employee } from "./EmployeeProfile";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const AttendanceReport = () => {
    const location = useLocation();
    const data = location.state; // new entry

    const [rows, setRows] = useState(() => {
        // initialize from localStorage
        const saved = localStorage.getItem("attendanceRows");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        if (!data) return;

        setRows(prevRows => {
            const alreadyExists = prevRows.some(
                item =>
                    item.date === data.date &&
                    item.time === data.time &&
                    item.status === data.status
            );

            if (!alreadyExists) {
                const newRows = [...prevRows, data];
                localStorage.setItem("attendanceRows", JSON.stringify(newRows)); // save to localStorage
                return newRows;
            }
            return prevRows;
        });
    }, [data]);

    const deleteRow = index => {
        setRows(prev => {
            const newRows = prev.filter((_, i) => i !== index);
            localStorage.setItem("attendanceRows", JSON.stringify(newRows)); // update localStorage
            return newRows;
        });
    };

    const handleApprove = index => {
        alert("Approved!");
        deleteRow(index);
    };

    const handleDecline = index => {
        alert("Declined!");
        deleteRow(index);
    };

    return (
        <div className="container" style={{ position: "relative", maxWidth: "100%" }}>
            <div className="row">
                <div className="col-md-3" style={{ marginTop: "-0px", marginLeft: "-20px" }}>
                    <Header />
                </div>

                <div className="col-md-9">
                    <table className="attendance-table" style={{ marginLeft: "20px" }} border={3}>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.length === 0 ? (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: "center", fontWeight: "bold" }}>
                                        No attendance records yet.
                                    </td>
                                </tr>
                            ) : (
                                rows.map((data, index) => (
                                    <tr key={index}>
                                        <td>{employee.employeeId}</td>
                                        <td>{data.date}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.designation}</td>
                                        <td>{data.time}</td>
                                        <td>{data.status}</td>
                                        <td>
                                            <button onClick={() => handleApprove(index)}>Approve</button>
                                            <button onClick={() => handleDecline(index)}>Decline</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AttendanceReport;
