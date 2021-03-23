import React from "react";
import { connect } from "react-redux";
import {
    Grid,
} from "@material-ui/core";
import {
    stringKelvinToCelsius,
} from "../utils/tools";

const CityDetail = (props) => {
    const {
        selected,
    } = props;

    return (
        <Grid item xs data-testid="detail">
            {selected?.weather && (
                <>
                    <h1 data-testid="name">{selected.name}</h1>
                    <h2>{selected.weather.weather[0].main}</h2>
                    <p>{selected.weather.weather[0].description}</p>
                    <img alt="weather icon" src={`http://openweathermap.org/img/wn/${selected.weather.weather[0].icon}@2x.png`} />
                    <p>{`${stringKelvinToCelsius(selected.weather.main.temp)} (feels like: ${stringKelvinToCelsius(selected.weather.main.feels_like)})`}</p>
                    <p>Sunrise {(new Date(selected.weather.sys.sunrise*1000).toTimeString())}</p>
                    <p>Sunset {(new Date(selected.weather.sys.sunset*1000).toTimeString())}</p>
                </>
            )}
        </Grid>
    )
}

function mapStateToProps(state) {
    return {
        selected: state.selected
    }
}

export default connect(mapStateToProps, null)(CityDetail);
