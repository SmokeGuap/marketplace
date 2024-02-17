import { FC, useContext, useEffect, useState } from 'react';

import { CartIcon, LoaderIcon } from 'src/assets/icons';
import { StateContext } from 'src/context';
import { countOldPrice, readMore } from 'src/utils';

import styles from './Product.module.scss';
import { IProductProps } from './Product.types';

const Product: FC<IProductProps> = (props) => {
  const { product } = props;

  const [inCart, setInCart] = useState(false);
  const { cart, addProduct } = useContext(StateContext);

  const longDescription = product.description.length > 75;

  useEffect(() => {
    if (!cart) return;
    if (cart.find((item) => item.id === product.id)) {
      setInCart(true);
    }
  }, [cart]);

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
        {longDescription && (
          <button type='button' className={styles.readMore}>
            Read more
          </button>
        )}
      </p>

      <div className={styles.priceWrapper}>
        <button
          onClick={() => addProduct(product)}
          type='button'
          className={styles.newPrice}
        >
          {inCart ? (
            <p>ADD MORE</p>
          ) : (
            <>
              <CartIcon />
              <p>${product.price}</p>
            </>
          )}
        </button>
        <p className={styles.oldPrice}>
          <s>${countOldPrice(product.price, product.discountPercentage)}</s>
        </p>
      </div>
    </div>
  );
};

export default Product;
