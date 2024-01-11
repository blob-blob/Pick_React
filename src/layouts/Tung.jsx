// 헤더 없는 레이아웃
import styles from '../styles/Layout.module.scss';

// eslint-disable-next-line react/prop-types
const TungLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default TungLayout;
