import PropTypes from 'prop-types';
import { Input } from './input.style';

Input.propTypes = {
  customStyle: PropTypes.string,
};

Input.defaultProps = {
  customStyle: '',
};

export default Input;
