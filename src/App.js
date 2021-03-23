import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import {
    CitiesList,
} from './components';

function App() {
    return (
        <div className="App">
            <Grid container>
                <CitiesList />
            </Grid>
        </div>
    );
}

export default App;
