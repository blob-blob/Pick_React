import styles from '../styles/BottomMenu.module.scss';
import { Link } from 'react-router-dom';

const BottomMenu = () => {
  return (
    <div className={styles.bottom_menu}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>bbbb</div>
      <div>cccc</div>
      <div>dddd</div>
      <div>eeee</div>
    </div>
  );
};

export default BottomMenu;
