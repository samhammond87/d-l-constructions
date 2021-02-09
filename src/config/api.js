// axios makes requests to the server
import axios from 'axios';

// creates a baseURL so that we only need to add the end point to our requests
const constructionAPI = axios.create({
    baseURL: 'https://dl-constructions-api.herokuapp.com'
})

// attaches the Users JWT to the headers using interceptor requests
constructionAPI.interceptors.request.use((req) => {
    //sets the interceptor
    const token = sessionStorage.getItem('token') // 'token' = jwt in './components/Portal/NewUser.js line 42
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default constructionAPI