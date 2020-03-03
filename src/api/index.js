
async function fetchImages() {
    const response = await fetch('http://localhost:3000/images');
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

export { fetchImages };





/*
const init = {
    method: 'GET',
    headers: {
        'content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};
"use strict";
const myRequest = new Request('./data.json', init);
*/
