import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  return (
    <div>
      <h1>{props.activeCity.name}</h1>
      <img
        src={`https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`}
        alt={props.activeCity.name}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps, null)(ActiveCity);
