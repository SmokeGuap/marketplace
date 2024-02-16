import { Product } from 'src/components';

import styles from './Products.module.scss';

const Products = () => {
  return (
    <div className={styles.products}>
      <Product />
    </div>
  );
};

export default Products;
