export const selectCity = (city) => {
  return {
    type: 'selectCity',
    payload: city
  };
};


const initialSelectedCity = [];
export const selectedCityReducer = (selectedCityState = initialSelectedCity, action) => {
  switch (action.type) {
    case 'selectCity':
      return action.payload;
    default:
      return selectedCityState;
  }
};

export default selectedCityReducer;
