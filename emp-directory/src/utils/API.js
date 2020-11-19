import axios from "axios";

function getEmployee() {
    return axios.get("https://randomuser.me/api/?seed=foobar&results=25")
}

export default getEmployee;