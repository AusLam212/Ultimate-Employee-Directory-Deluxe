import React, { Component } from "react";
import EmployeeData from "./EmployeeData";
import EmployeeTable from "./EmployeeTable";
import Header from "./Header";
import SearchName from "./SearchName";
import Container from "./Container";
import employees from "../employees.json";

class EmployeeContainer extends Component {

    //Set initial state of app
    state = {
        employees,
        searchedEmployees: [...employees]
    };

    // When value is inserted into input update state
    handleInputChange = event => {
        this.setState({
            searchedEmployees: this.state.employees.filter(employee => employee.name.includes(event.target.value))
        });
      };

    // Render components and pass to App.js
    render() {

        const employees = this.state.searchedEmployees || this.state.employees;

        return (
            <Container>
                <Header />
                <SearchName
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable>
                    {employees.map(employee => (
                        <EmployeeData 
                            key={employee.id.value}
                            image={employee.picture.large}
                            id={employee.id.value}
                            name={employee.name}
                            phone={employee.phone}
                            email={employee.email}
                        />
                    ))}
                </EmployeeTable>
            </Container>
        );
    }
}

export default EmployeeContainer;