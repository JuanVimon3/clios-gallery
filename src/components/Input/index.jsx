import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = ({ value, onChangeValue, labelText, placeholder }) => (
  <div className={styles.container}>
    <label htmlFor="input" className={styles.label}>
      {labelText}
    </label>
    <input
      id="input"
      value={value}
      type="text"
      onChange={onChangeValue}
      className={styles.input}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
