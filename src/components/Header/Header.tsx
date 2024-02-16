import { useState } from 'react';

import { Search, Categories, Cart } from 'src/components';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <Search isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen && <Categories />}
      <Cart />
    </div>
  );
};

export default Header;
