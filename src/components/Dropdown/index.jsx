import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.css';

const Dropdown = ({ value, onChangeValue, labelText, placeholder, options }) => (
  <div className={styles.container}>
    <label htmlFor="dropdown" className={styles.label}>
      {labelText}
    </label>
    <select
      value={value}
      id="dropdown"
      type="text"
      onChange={onChangeValue}
      className={classNames(styles.dropdown, { [styles.placeholderActive]: value === '' })}
    >
      <option key="" value="" hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
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
