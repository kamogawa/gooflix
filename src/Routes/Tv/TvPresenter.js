import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TvPresenter = ({topRated, popular, airingToday, error,loading}) => null;

TvPresenter.PropTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array, 
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
}

export default TvPresenter;