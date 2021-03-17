import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../reducers/selectedCityReducer';
import { setActiveCity } from '../reducers/activeCityReducer';

class City extends React.Component {
  handleClick = () => {
    return this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.props.city.name}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectCity,
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
