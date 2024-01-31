import styles from '../styles/BottomMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { FaUser, FaRegUser } from 'react-icons/fa';
const BottomMenu = () => {
  const location = useLocation();

  return (
    <div className={styles.bottom_menu} style={{ backgroundColor: 'white' }}>
      <div>
        <Link to="/">
          {location.pathname === '/' ? <GoHomeFill color="black" size="24px" /> : <GoHome color="black" size="24px" />}
        </Link>
      </div>
      <div>
        <Link to="/myinfo">
          {location.pathname === '/myinfo' ? (
            <FaUser color="black" size="24px" />
          ) : (
            <FaRegUser color="black" size="24px" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomMenu;
