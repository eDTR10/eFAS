import axios from "axios";



axios.defaults.baseURL = "http://192.168.18.62:8000/api/v1/"
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios