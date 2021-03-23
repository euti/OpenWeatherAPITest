import React from 'react';
import { connect } from 'react-redux';
import {
    Grid,
} from '@material-ui/core';
import {
    CitiesList,
    CityDetail,
} from './components';

function App() {
    return (
        <div className="App">
            <Grid container>
                <CitiesList />
                <CityDetail />
            </Grid>
        </div>
    );
}

export default connect()(App);
