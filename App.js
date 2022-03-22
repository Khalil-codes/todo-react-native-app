import React from "react";
import { Provider } from "react-redux";
import AppEntry from "./src/AppEntry";
import { store } from "./src/redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <AppEntry />
        </Provider>
    );
};

export default App;
