import React from "react";
import PropTypes from "prop-types";

const Question = ({ content }) => (
  <div>
    <p>{content}</p>
  </div>
);

export default Question;

Question.propTypes = {
  content: PropTypes.string.isRequired
};
