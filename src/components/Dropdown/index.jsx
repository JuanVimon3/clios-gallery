import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Dropdown = ({ value, onChangeValue, labelText, placeholder }) => (
  <div className={styles.container}>
    <label htmlFor="dropdown" className={styles.label}>
      {labelText}
    </label>
    <select
      id="dropdown"
      value={value}
      type="text"
      onChange={onChangeValue}
      className={styles.dropdown}
      placeholder={placeholder}
    >
      <option value="oil">Oil</option>
      <option value="sculpture">Sculpture</option>
    </select>
  </div>
);

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
  placeholder: '',
};

export default Dropdown;
