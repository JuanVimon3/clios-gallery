import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = () => (
  <div>
    <h1>This is not a valid address</h1>
    <p>You can go to the main page here:</p>
    <Link to="/" className={styles.returnButton}>
      Home
    </Link>
  </div>
);

export default NotFound;
