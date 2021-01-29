import axios from 'axios';

const constructionAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

constructionAPI.interceptors.request.use((req) => {
    //sets the interceptor
    const token = sessionStorage.getItem('token')
    console.log("Set token header:", token)
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default constructionAPI