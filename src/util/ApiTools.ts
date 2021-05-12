import { apiBaseUrl, apiVersion } from '../settings';

export const getData = (apiAddress: string, baseUrl: string = apiBaseUrl, version: string = apiVersion) => {
    return fetch(baseUrl + '/' + version + '/' + apiAddress, {
        "method" : "get"
    }).then(
        response => response.json()
    )
    .then( response => {
        return response;
    })
    .catch(err => {
        console.error(err);
    });
}