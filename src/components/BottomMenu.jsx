import styles from '../styles/BottomMenu.module.scss';
import { Link } from 'react-router-dom';

const BottomMenu = () => {
  return (
    <div className={styles.bottom_menu}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/myinfo">MyPage</Link>
      </div>
    </div>
  );
};

export default BottomMenu;
