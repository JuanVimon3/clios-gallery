import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Dropdown = ({ onChangeValue, labelText, placeholder, options }) => (
  <div className={styles.container}>
    <label htmlFor="dropdown" className={styles.label}>
      {labelText}
    </label>
    <select id="dropdown" type="text" onChange={onChangeValue} className={styles.dropdown}>
      <option value="" hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option>{option.name}</option>
      ))}
    </select>
  </div>
);

Dropdown.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Dropdown.defaultProps = {
  placeholder: '',
};

export default Dropdown;
