import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/redux";

beforeEach(() => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
})

test('renders default elements', async() => {
    const citiesHeadElement = screen.getByText(/Cities:/i);
    expect(citiesHeadElement).toBeInTheDocument();

    const listItem = screen.getByText(/Barcelona/i);
    expect(listItem).toBeInTheDocument();

    const detailItem = screen.getByTestId("detail")
    expect(detailItem).toBeEmptyDOMElement()
});

test('clicking on a city shows the weather', async() => {
    const listItem = screen.getByText(/Barcelona/i);
    fireEvent.click(listItem);
    await screen.findByTestId("name")
    const detailItem = screen.getByTestId("detail")
    expect(detailItem).not.toBeEmptyDOMElement();
});
