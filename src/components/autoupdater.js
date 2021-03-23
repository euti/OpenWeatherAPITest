import React, { useState, useEffect} from 'react';
import {
    LinearProgress,
} from '@material-ui/core';
import store from '../store/redux';
import {
    setAutoRefresh,
} from "../store/actions";
import {
    enableAutoUpdate,
    refreshSeconds,
} from "../utils/config";

const AutoUpdater = () => {
    const [progress,setProgress] = useState(refreshSeconds);

    useEffect(() => {
        console.log("autoeff")
        if (!enableAutoUpdate) return;
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === refreshSeconds) {
                    store.dispatch(setAutoRefresh(true))
                    return 0;
                }
                return Math.min(oldProgress + 0.1, refreshSeconds);
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    },[]);

    return (
        enableAutoUpdate && (
            <LinearProgress variant="determinate" value={progress / refreshSeconds * 100}/>
        )
    )
};

export default AutoUpdater;
