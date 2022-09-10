import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://phpstack-663883-2850727.cloudwaysapps.com',
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
        return axios.get('https://phpstack-663883-2850727.cloudwaysapps.com/pairs/', { params: { cageNumber: id } });
    },
    getClutch(ids){
       return axios.get('https://phpstack-663883-2850727.cloudwaysapps.com/clutches/', { params: { id: ids } });
}
}