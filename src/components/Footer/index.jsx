import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.container}>
    <h5>Copyright {new Date().getFullYear()} | All rights reserved</h5>
  </footer>
);

export default Footer;
