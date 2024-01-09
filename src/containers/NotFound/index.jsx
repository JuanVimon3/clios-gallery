import styles from './styles.module.css';

const NotFound = () => (
  <div className={styles.content}>
    <h1>
      Page not found <br />
    </h1>
    <p>{`Oops! We couldn't find the page that you're looking for`}</p>
  </div>
);

export default NotFound;
