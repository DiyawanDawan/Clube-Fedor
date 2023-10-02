# Clube-Fedor

awal src > script => component data-sourse.js 

    const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

        if (filteredClubs.length) {
            resolve(filteredClubs);
        } else {
            reject(`${keyword} is not found`);
        }
    });

menjadi kodenya


    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
        .then(response => {
        return response.json()
        })
        .then(responseJson => {
        if (responseJson.teams) {
            return Promise.resolve(responseJson.teams)
        } else {
            return Promise.reject(`${keyword} is not found`)
        }
        })