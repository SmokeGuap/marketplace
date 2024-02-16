import classnames from 'classnames';
import { FC, useEffect, useState } from 'react';

import getAllCategories from 'src/API/requests/getAllCategories';
import { useHorizontalScroll, useScrollBlock } from 'src/hooks';

import styles from './Categories.module.scss';

const Categories: FC = () => {
  const [categories, setCategories] = useState<string[]>();
  const [activeCategory, setActiveCategory] = useState('');

  const scrollRef = useHorizontalScroll();
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  if (!categories) return;

  return (
    <div
      onMouseEnter={() => blockScroll()}
      onMouseLeave={() => allowScroll()}
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
          onClick={() => setActiveCategory(category)}
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
