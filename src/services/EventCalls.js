import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://shah-birds.herokuapp.com',
    //baseURL: 'http://localhost:3000',
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
    getPairs(perPage, page){
        return apiClient.get('/pairs?_limit=' + perPage + '&_page=' + page );
    },
    getPair(id){
        return apiClient.get('/pairs/', { params: { cageNumber: id } });
    },
    getClutch(idArray){
       return apiClient.get('/clutches/', { params: { id: idArray } });
}
}