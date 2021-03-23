import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/redux";

test('renders', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
    );

    const citiesHeadElement = screen.getByText(/Cities:/i);
    expect(citiesHeadElement).toBeInTheDocument();

    const listItem = screen.getByText(/Barcelona/i);
    expect(listItem).toBeInTheDocument();
});
