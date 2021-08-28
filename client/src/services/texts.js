import axios from 'axios';
const baseUrl = `http://localhost:3001/texts`;

const getAll = async () =>{
    const request = await axios.get(baseUrl);
    return request.data;
}
const getById = async(id) => {
    const request = await axios.get(`${baseUrl}/${id}/`);
    //console.log(request.data);
    return request.data;
}
export  default {getAll, getById}