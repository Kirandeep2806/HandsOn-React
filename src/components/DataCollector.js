import fetch from 'node-fetch';

export default async function ()  {
    const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
    const issues = await response.json();
    return issues;
}
