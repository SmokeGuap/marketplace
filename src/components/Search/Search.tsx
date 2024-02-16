import { FC } from 'react';

import { CloseIcon, SearchIcon } from 'src/assets/icons';

import styles from './Search.module.scss';
import { ISearchProps } from './Search.types';

const Search: FC<ISearchProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  const openSearch = () => {
    setIsOpen(true);
  };

  const closeSearch = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div className={styles.search}>
          <SearchIcon />
          <input placeholder='Search...' />
          <CloseIcon onClick={closeSearch} className={styles.close} />
        </div>
      ) : (
        <button onClick={openSearch} type='button' className={styles.button}>
          <SearchIcon />
        </button>
      )}
    </>
  );
};

export default Search;
