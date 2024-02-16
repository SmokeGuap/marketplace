import { FC } from 'react';

import { Product } from 'src/components';

import styles from './Products.module.scss';

const Products: FC = () => {
  return (
    <div className={styles.products}>
      <Product />
    </div>
  );
};

export default Products;
