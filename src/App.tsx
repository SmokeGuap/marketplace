import { Products, Header } from 'src/components';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Products />
    </div>
  );
};

export default App;
