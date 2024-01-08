import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomMenu from '../components/BottomMenu';
import styles from '../styles/Layout.module.scss';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}
      </main>

      <Footer />

      <BottomMenu />
    </div>
  );
};

export default DefaultLayout;
