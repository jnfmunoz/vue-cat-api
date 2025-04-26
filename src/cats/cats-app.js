import axios from 'axios';

export async function getRandomCat(){
    let response = await axios.get('https://api.thecatapi.com/v1/images/search');
    // console.log(response.data[0].url);

    return response.data[0].url;
}
