import axios from "axios";

axios.defaults.baseURL='https://api.themoviedb.org'
axios.defaults.headers.common['Authorization']=import.meta.env.VITE_TOKEN
axios.defaults.headers.post['Content-Type']='application/json'
export default axios