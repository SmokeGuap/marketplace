import { Products, Header } from 'src/components';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Products />
    </div>
  );
};

export default MainPage;
