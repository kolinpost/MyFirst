import * as axios from 'axios';

const baseUrl ='https://social-network.samuraijs.com/api/1.0/';

const instans = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: { "API-KEY": "177c849e-1bdb-4ee4-9eda-4a676e9834d0" }
})

export const UserAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return  response.data;
        });
    },
    deleteUser (id) {
        return instans.delete(`follow/${id}`)
        .then(response => {
            return response.data
        });
    
     },
     postUser (id) {
        return instans.post(`follow/${id}`)
        .then(response => {
            return response.data
        });
    
     }
    
}

