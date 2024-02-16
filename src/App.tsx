import { SearchIcon, CartIcon } from 'src/assets/icons';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Categories />
      </div>
    </div>
  );
};

export default App;
