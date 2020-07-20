import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Searchpage from "./components/Searchpage";
import Loginpage from "./components/Loginpage";
import "./App.css";

const App = (props) => {
  const { isUserLoggedIn } = props;
  return <Fragment>{isUserLoggedIn ? <Searchpage /> : <Loginpage />}</Fragment>;
};

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.loginReducer.isUserLoggedIn,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
};
