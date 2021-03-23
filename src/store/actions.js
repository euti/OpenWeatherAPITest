export function updateCities(data) {
    return {
        type: 'UPDATE_CITIES',
        data
    }
}

export function selectCity(city) {
    return {
        type: 'SELECT_CITY',
        data: city
    }
}

export function setAutoRefresh(state) {
    return {
        type: 'SET_AUTOREFRESH',
        data: state,
    }
}