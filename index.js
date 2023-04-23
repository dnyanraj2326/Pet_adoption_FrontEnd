/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store)
const reduxStore = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => reduxStore);
