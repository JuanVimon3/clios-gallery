import PropTypes from 'prop-types';

import styles from './styles.module.css';

export default function Input({ value, onChangeValue }) {
  return <input value={value} onChange={onChangeValue} className={styles.input} />;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
