import { url } from '../variables.js';

async function getUser(userName){
    const response = await fetch(`${url}/${userName}`);
    return await  response.json();  
}

export { getUser }