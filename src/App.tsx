import { Search, Categories, Cart, Products } from './components';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Search />
        <Categories />
        <Cart />
      </div>
      <Products />
    </div>
  );
};

export default App;
