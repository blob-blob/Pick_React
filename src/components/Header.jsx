import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>로고 위치(This is Header)</div>

        <nav className={styles.navigation}>
          <ul>
            <li>알림</li>
            <li>햄버거</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
