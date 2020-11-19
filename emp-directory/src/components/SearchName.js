import React from "react";

function SearchName(props) {
    return(
        <form>
            <div className="form-group">
                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For an Employee by Name"
                id="search"
                />
                <br />
            </div>
        </form>
    )
}

// Export to Employee Container
export default SearchName;