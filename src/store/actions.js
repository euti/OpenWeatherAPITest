export function updateCities(data) {
    return {
        type: 'UPDATE_CITIES',
        data
    }
}

export function selectCity(name) {
    return {
        type: 'SELECT_CITY',
        data: name
    }
}
