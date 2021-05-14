import { apiBaseUrl, apiVersion } from '../settings';

export const getData = (apiAddress: string, baseUrl: string = apiBaseUrl, version: string = apiVersion) => {
    return fetch(baseUrl + '/' + version + '/' + apiAddress, {
        "method" : "GET",
        "headers": {
            "accept": "application/json"
        },
    }).then(response => {
        return {
            response: response.json(),
            status: response.status,
            statusText: response.statusText
        };
    })
    .then( async ({ response, status, statusText }) => {
        switch(status) {
            case 200:
            case 201:
            case 204:
                return response;
            default:
                const data = await response;
                //return "Error " + status + " : " + (data && data.message ? data.message : statusText ? statusText : 'No error message')
                throw new Error("Error " + status + " : " + (data && data.message ? data.message : statusText ? statusText : 'No error message') );
        }
    })
    /*.catch(err => {
        console.error('Error in calling API: ', err);
    });*/
}

export const sendData = (apiAddress: string, data: any, baseUrl: string = apiBaseUrl, version: string = apiVersion, httpMethod = 'POST') => {
    return fetch(baseUrl + '/' + version + '/' + apiAddress, {
        "method" : httpMethod, // POST Or PUT Or DELETE
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify(data)
    }).then( response => {
        return {
            response: response.json(),
            status: response.status,
            statusText: response.statusText
        };
    })
    .then( async ({ response, status, statusText }) => {
        switch(status) {
            case 200:
            case 201:
            case 204:
                return response;
            default:
                const data = await response;
                throw new Error("Error " + status + " : " + (data && data.message ? data.message : statusText ? statusText : 'No error message') );
        }
    })
    /*.catch(err => {
        console.error('Error: ', err);
    });*/
}
