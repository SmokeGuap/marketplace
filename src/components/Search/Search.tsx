import { FC, useState } from 'react';

import { CloseIcon, SearchIcon } from 'src/assets/icons';

import styles from './Search.module.scss';
import { ISearchProps } from './Search.types';

const Search: FC<ISearchProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState('');

  const InFocus = () => {
    setFocus(true);
  };

  const OutFocus = () => {
    setFocus(false);
  };

  const openSearch = () => {
    setIsOpen(true);
  };

  const closeSearch = () => {
    setIsOpen(false);
  };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <>
      {isOpen ? (
        <div className={styles.search}>
          <SearchIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={InFocus}
            onBlur={OutFocus}
            placeholder='Search...'
          />
          {focus && search.length > 0 && (
            <button
              type='button'
              onMouseDown={clearSearch}
              className={styles.clear}
            >
              clear text
            </button>
          )}
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
