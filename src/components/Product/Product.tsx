import { FC } from 'react';

import { CartIcon, LoaderIcon } from 'src/assets/icons';

import styles from './Product.module.scss';
import { IProductProps } from './Product.types';
import { countOldPrice, readMore } from 'src/utils';

const Product: FC<IProductProps> = (props) => {
  const { product } = props;

  const longDescription = product.description.length > 75;

  return (
    <div className={styles.product}>
      <p className={styles.sale}>
        <span>{product.discountPercentage}%</span>
        <span>off sale</span>
      </p>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.image}
      />
      <div className={styles.rating}>
        <LoaderIcon />
        <p>{product.rating}</p>
      </div>
      <p className={styles.name}>{product.title}</p>
      <p className={styles.description}>
        {readMore(product.description)}
        {longDescription && <span className={styles.readMore}>Read more</span>}
      </p>

      <div className={styles.priceWrapper}>
        <div className={styles.newPrice}>
          <CartIcon />
          <p>${product.price}</p>
        </div>
        <p className={styles.oldPrice}>
          <s>${countOldPrice(product.price, product.discountPercentage)}</s>
        </p>
      </div>
    </div>
  );
};

export default Product;
