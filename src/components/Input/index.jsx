import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = ({ value, onChangeValue, labelText, placeholder, type, onFocus, onBlur }) => (
  <div className={styles.container}>
    <label htmlFor="input" className={styles.label}>
      {labelText}
    </label>
    <input
      id="input"
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      className={styles.input}
    />
  </div>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  onFocus: () => {},
  onBlur: () => {},
};

export default Input;
