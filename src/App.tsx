import { SearchIcon, CartIcon } from 'src/assets/icons';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.search}>
          <SearchIcon />
        </div>
        <div className={styles.categories}></div>
        <div className={styles.cart}>
          <CartIcon />
          <p>cart</p>
        </div>
      </div>
    </div>
  );
};

export default App;
