import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Menu = () => (
  <nav className={styles.nav}>
    <ul className={styles.ul}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/exhibitions/">Exhibitions</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
