import React from "react";

function EmployeeData(props) {
    return (
        <tbody>
            <tr>
                <td><img src={props.image} alt="Employee"></img></td>
                <td>{props.name}</td>
                <td>{props.id}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
            </tr>
        </tbody>
    )
}

export default EmployeeData;