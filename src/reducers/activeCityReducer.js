export const setActiveCity = (city) => {
  return {
    type: 'set-active-city',
    payload: city
  };
};

const initialActiveCity = { name: "Click a city" };
export const activeCityReducer = (activeCityState = initialActiveCity, action) => {
  switch (action.type) {
    case 'set-active-city':
      return action.payload;
    default:
      return activeCityState;
  }
};
