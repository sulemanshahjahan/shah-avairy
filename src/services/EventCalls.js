import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://shah-birds.herokuapp.com',
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
    getPairs(perPage){
        return apiClient.get('/pairs?_limit=' + perPage + '&_page=1' );
    },
    getPair(id){
        return apiClient.get('/pairs/', { params: { cageNumber: id } });
    },
    getClutch(idArray){
       return apiClient.get('/clutches/', { params: { id: idArray } });
}
}