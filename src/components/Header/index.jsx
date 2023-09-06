import Menu from '../Menu';

import styles from './styles.module.css';

const Header = () => (
  <header className={styles.container}>
    <Menu />
    <h3>Art Institute of Chicago</h3>
  </header>
);

export default Header;
