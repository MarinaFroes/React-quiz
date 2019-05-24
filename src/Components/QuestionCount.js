import React from "react";
import PropTypes from "prop-types";

const QuestionCount = ({ counter, total }) => (
  <div>
    Question {counter} of {total}
  </div>
);

export default QuestionCount;

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
