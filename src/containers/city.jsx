import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../reducers/activeCityReducer';

const City = (props) => {
  return (
    <div>
      <h1
        onClick={() => {
          props.setActiveCity(props.city);
        }}>
        {props.city.name}
      </h1>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(City);
