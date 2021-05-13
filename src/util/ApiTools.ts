import { apiBaseUrl, apiVersion } from '../settings';

export const getData = (apiAddress: string, baseUrl: string = apiBaseUrl, version: string = apiVersion) => {
    return fetch(baseUrl + '/' + version + '/' + apiAddress, {
        "method" : "GET",
        "headers": {
            "accept": "application/json"
        },
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

export const sendData = (apiAddress: string, data: any, baseUrl: string = apiBaseUrl, version: string = apiVersion) => {
    return fetch(baseUrl + '/' + version + '/' + apiAddress, {
        "method" : "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify(data)
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
