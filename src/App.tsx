import { Search, Categories, Cart } from './components';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Search />
        <Categories />
        <Cart />
      </div>
    </div>
  );
};

export default App;
