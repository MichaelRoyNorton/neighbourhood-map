const api = 'https://api.foursquare.com/v2/venues/'

export const getPubs = (location, query) => {
    return fetch(`${api}search?near=${location}&query=${query}&client_id=CZW2V2AD5WSJLNLE5NN0C4IAYMKK1L5ZZJGFIJ1OZEMSBZOV&client_secret=NSNRWEH1HYFFPK0ZNKXUOPB3U01AXMDCVYCUA3P0BWDQQT5R&v=20180621`)
        .then(res => res.json())
        .then(data => data.response.venues)
        .catch(error => console.error(error))
};
