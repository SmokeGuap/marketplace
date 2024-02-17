import classnames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getAllCategories } from 'src/API/requests/';
import { useHorizontalScroll, useScrollBlock } from 'src/hooks';

import styles from './Categories.module.scss';

const Categories: FC = () => {
  const [categories, setCategories] = useState<string[]>();

  const [_, setSearchParams] = useSearchParams();

  const scrollRef = useHorizontalScroll();
  const [blockScroll, allowScroll] = useScrollBlock();

  const { search } = useLocation();
  const searchArray = search.split('&');
  const category = searchArray
    .find((item) => item.includes('category'))
    ?.split('=')[1];

  const [activeCategory, setActiveCategory] = useState(
    category ? category : ''
  );

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    if (activeCategory) {
      setSearchParams({ ['category']: activeCategory });
    } else {
      setSearchParams({});
    }
  }, [activeCategory]);

  if (!categories) return;

  return (
    <div
      onMouseEnter={blockScroll}
      onMouseLeave={allowScroll}
      ref={scrollRef}
      className={styles.categories}
    >
      <button
        type='button'
        onClick={() => setActiveCategory('')}
        className={classnames(styles.category, {
          [styles.activeCategory]: activeCategory === '',
        })}
      >
        all
      </button>
      {categories.map((category, id) => (
        <button
          type='button'
          key={id}
          onClick={() =>
            setActiveCategory(activeCategory === category ? '' : category)
          }
          className={classnames(styles.category, {
            [styles.activeCategory]: activeCategory === category,
          })}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
