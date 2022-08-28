import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false, 
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getBirds(){
        return apiClient.get('/birds');
    },
    getBird(id){
        return apiClient.get('/birds/' + id);
    },
    getPairs(){
        return apiClient.get('/pairs');
    },
    getPair(id){
        return axios.get('http://localhost:3000/pairs/', { params: { cageNumber: id } });
    },
    getClutch(){
      
        return apiClient.get('/clutches/?id=987&id=876');
    },
}