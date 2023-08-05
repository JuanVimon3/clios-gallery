import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = ({ value, onChangeValue, labelText, backText }) => (
  <>
    <label htmlFor="input">{labelText}</label>
    <input
      id="input"
      value={value}
      type="text"
      onChange={onChangeValue}
      className={styles.input}
      placeholder={backText}
    />
  </>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  backText: PropTypes.string.isRequired,
};

export default Input;
