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
      type={type}
      onChange={onChangeValue}
      className={`${styles.input} ${value === '' ? styles.placeholderActive : ''}`}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
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
