import axios from 'axios';

const constructionAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export default constructionAPI