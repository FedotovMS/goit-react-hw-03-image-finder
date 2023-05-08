import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button
      className={css.Button}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  // disabled: PropTypes.bool.isRequired,
};

export default Button;
