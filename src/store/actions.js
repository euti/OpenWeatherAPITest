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
