import cities from '../db/cities';

export const getCities = () => {
  return {
    type: 'getCities',
    payload: cities
  };
};


const initialCityList = [];
export const cityListReducer = (cityListState = initialCityList, action) => {
  switch (action.type) {
    case 'getCities':
      return action.payload;
    default:
      return cityListState;
  }
};

export default cityListReducer;
