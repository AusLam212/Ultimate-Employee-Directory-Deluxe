import React from "react";

// Styling for heading
const styles = {
    header: {
        textAlign: "center",
        fontSize: "40px",
        color: "white"
    }
}

// Page
function Header() {
    return (
        <div class="jumbotron jumbotron-fluid bg-primary">
            <div class="container">
                <h1 class="display-4" style={styles.header}>Ultimate Employee Directory Deluxe</h1>
            </div>
        </div>
    );
}

// export to App.js
export default Header;