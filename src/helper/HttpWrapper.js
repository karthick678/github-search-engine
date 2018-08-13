export const HttpWrapper = {
    get: (url) => {
        return fetch(url, {
            method: 'GET',
            Accept: 'application/json'
        }).then((response) => {
            if (response.status === 200)
                return response.json()
        }, (reason) => {
            reason.json()
        });
    }
}