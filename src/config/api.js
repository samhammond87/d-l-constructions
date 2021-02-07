import axios from 'axios';

const constructionAPI = axios.create({
    baseURL: 'https://dl-constructions-api.herokuapp.com/'
})

constructionAPI.interceptors.request.use((req) => {
    //sets the interceptor
    const token = sessionStorage.getItem('token')
    // console.log("Set token header:", token)
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default constructionAPI