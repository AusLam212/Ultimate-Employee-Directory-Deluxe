import React from "react";

function EmployeeTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">ID</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            {props.children}
        </table>
    )
}


export default EmployeeTable;