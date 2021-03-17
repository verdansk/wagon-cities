import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../reducers/activeCityReducer';


class ActiveCity extends React.Component {

  render() {
    return (
      <div>
        <h1{props.activeCity.name}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setActiveCity
  },
  dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
