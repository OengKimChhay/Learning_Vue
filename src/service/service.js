import axios from 'axios';
import NPprogress from 'nprogress';

const apiClient = axios.create({
    baseUrl : 'http://localhost:8000',
    withCredentials: false,
    headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    }
});

// ----- we ngprogress bar when we call api all request -----
apiClient.interceptors.request.use(config => {
    NPprogress.start();
    return config;
});

apiClient.interceptors.response.use(response => {
    NPprogress.done();
    return response;
});

export default {
    getData($route){
        return apiClient.get($route);
    }
}