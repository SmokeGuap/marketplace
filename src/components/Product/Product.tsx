import { FC } from 'react';

import { CartIcon, LoaderIcon } from 'src/assets/icons';

import styles from './Product.module.scss';

const Product: FC = () => {
  return (
    <div className={styles.product}>
      <p className={styles.sale}>
        <span>12.96%</span>
        <span>off sale</span>
      </p>
      <img className={styles.image} />
      <div className={styles.rating}>
        <LoaderIcon />
        <p>4.69</p>
      </div>
      <p className={styles.name}>Apple iPhone 9</p>
      <p className={styles.description}>
        An apple mobile which is nothing like apple An apple
      </p>
      <div className={styles.priceWrapper}>
        <div className={styles.newPrice}>
          <CartIcon />
          <p>$549</p>
        </div>
        <p className={styles.oldPrice}>
          <s>$685</s>
        </p>
      </div>
    </div>
  );
};

export default Product;
