import React from "react";

function Header() {

    const styles = {
        jumbotron: {
            background: "lightblue"
        }
    }
    return (
        <div class="jumbotron jumbotron-fluid" stlye={styles.jumbotron}>
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
    );
}

export default Header;