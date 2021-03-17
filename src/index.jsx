// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import { cityListReducer } from './reducers/cityListReducer';
import { selectedCityReducer } from './reducers/selectedCityReducer';
import { activeCityReducer } from './reducers/activeCityReducer';


// State and reducers
const reducers = combineReducers({
  cityList: cityListReducer,
  selectedCity: selectedCityReducer,
  activeCity: activeCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
