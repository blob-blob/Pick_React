import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <nav className={styles.navigation}></nav>
        <Link to="/login">
          <span className="text-xl text-gray-10">Login</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
