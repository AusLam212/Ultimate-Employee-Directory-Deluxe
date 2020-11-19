import React from "react";

// Styling for heading
const styles = {
    jumbotron: {
        marginTop: "5px",
        borderRadius: "5px"
    },
    header: {
        textAlign: "center",
        fontSize: "40px",
        color: "white",
    }
}

// Page
function Header() {
    return (
        <div className="jumbotron jumbotron-fluid bg-primary" style={styles.jumbotron}>
            <div className="container">
                <h1 className="display-4" style={styles.header}>Ultimate Employee Directory Deluxe</h1>
            </div>
        </div>
    );
}

// export to EmployeeContainer
export default Header;