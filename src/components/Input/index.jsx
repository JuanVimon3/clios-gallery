import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = ({ value, onChangeValue }) => <input value={value} onChange={onChangeValue} className={styles.input} />;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default Input;
