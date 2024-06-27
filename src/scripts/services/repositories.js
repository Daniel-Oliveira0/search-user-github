import { url, repoQuantity } from '/src/scripts/variables.js';

async function getrepositories(userName){
    const response = await fetch(`${url}/${userName}/repos?per_page=E${repoQuantity}`);
    return await  response.json();  
}

export { getrepositories }