import React, {useEffect, useCallback} from 'react';
import { connect } from 'react-redux';
import {
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    IconButton,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import store from '../store/redux';
import {
    updateCities,
    selectCity,
    setAutoRefresh,
} from "../store/actions";
import {
    APIKey,
} from "../utils/config";
import {
    stringKelvinToCelsius,
} from '../utils/tools'

const CitiesList = (props) => {
    const {
        cities,
        selected,
        refresh,
    } = props;

    const getWeather = cityName => {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`)
            .then(response => {
                return response.status === 200
                    ? response.json()
                    : undefined
            })
            .then(data => data)
    };

    const handleUpdate = useCallback((names, refresh = false) => {
        const updatedCities = names => {
            //if no city defined it updates all
            const updateNames = names || cities.map(city=>city.name);

            return Promise.all(updateNames.map(name => getWeather(name)))
                .then(values => {
                    const newCities = [...cities];
                    updateNames.forEach((name, index) => {
                        const cityIndex = cities.findIndex(city => city.name === name);
                        newCities[cityIndex].weather = values[index]
                    });
                    return newCities;
                });
        };

        updatedCities(names)
            .then( data => {
                if (refresh)
                    store.dispatch(setAutoRefresh(false ))
                store.dispatch(updateCities(data))
            })
    },[cities]);

    useEffect(()=> {
        if (refresh)
            handleUpdate(undefined, true)
    }, [handleUpdate, refresh])

    return (
        <Grid item xs>
            <List>
                <ListItem>
                    <ListItemText primary="Cities:" />
                </ListItem>
                {
                    cities?.map((city, index) => {
                        return (
                            <ListItem
                                button
                                key={index}
                                selected={city.name===selected?.name}
                                onClick={() => store.dispatch(selectCity(city))}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        {
                                            city.weather
                                                ? stringKelvinToCelsius(city.weather.main.temp)
                                                : "N/A"
                                        }
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={city.name}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        onClick={
                                            () => handleUpdate([city.name])
                                        }
                                    >
                                        ↺
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Grid >
    )
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        selected: state.selected,
        refresh: state.autoRefresh,
    }
};

export default connect(mapStateToProps, null)(CitiesList);
