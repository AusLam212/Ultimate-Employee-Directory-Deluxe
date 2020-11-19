import axios from "axios";

// API route to grab test data for employees
function getEmployee() {
    return axios.get("https://randomuser.me/api/?seed=foobar&results=25")
}


// Export to App
export default getEmployee;