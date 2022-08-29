import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '20ca7f8670msh142d08d6102aa5ap1b6b0ejsn0776101110c5'
        }
    });
    return data;
} ;