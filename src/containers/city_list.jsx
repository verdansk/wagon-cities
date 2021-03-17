import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCities } from '../reducers/cityListReducer';
import City from './city';

class CityList extends React.Component {
  componentWillMount() {
    this.props.getCities();
  }
  render() {
    return (
      <div>
        {this.props.cityList.map((city) => {
          return <City key={city.address} city={city} />;
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCities
  },
  dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    cityList: state.cityList
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
