import BottomMenu from '../components/BottomMenu';
import styles from '../styles/Layout.module.scss';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <BottomMenu />
    </div>
  );
};

export default DefaultLayout;
