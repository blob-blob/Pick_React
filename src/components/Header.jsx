import styles from '../styles/Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <nav className={styles.navigation}></nav>{' '}
      </div>
    </header>
  );
};

export default Header;
