import Menu from '../Menu';

import styles from './styles.module.css';

const Header = () => (
  <header className={styles.container}>
    <Menu />
    <h3>{`Clio's Gallery`}</h3>
  </header>
);

export default Header;
