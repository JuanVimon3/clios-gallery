import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = () => (
  <div className={styles.returnContent}>
    <h1>404- NotFound. This is not a valid address</h1>
    <p>Please go to the main page here:</p>
    <Link to="/" className={styles.returnButton}>
      Home
    </Link>
  </div>
);

export default NotFound;
