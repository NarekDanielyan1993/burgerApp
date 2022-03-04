import axios from "axios";

const api = axios.create({
    baseURL: 'https://burgershop-ace01-default-rtdb.firebaseio.com'
})

const fetchApi = ({ method, url = "/", data = {}, headers = {} }) => {

    const METHODS = ["get", "post", "delete", "update"];
    const currentMethod = METHODS.find((item) => item === method.toLowerCase()) || 'get'
    return api[currentMethod](url, data, headers)
}

export default fetchApi;