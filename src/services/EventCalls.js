import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://shah-birds.herokuapp.com/',
    withCredentials: false, 
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getBirds(birdsID){
        return apiClient.get('/birds', { params: { id: birdsID } });

    },
    getBird(id){
        return apiClient.get('/birds/' + id);
    },
    getPairs(){
        return apiClient.get('/pairs');
    },
    getPair(id){
        return axios.get('https://shah-birds.herokuapp.com/pairs/', { params: { cageNumber: id } });
    },
    getClutch(ids){
       return axios.get('http://localhost:3000/clutches/', { params: { id: ids } });
}
}