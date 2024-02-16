import { FC, useContext, useState } from 'react';

import { TProduct } from '../Product/Product.types';

import styles from './CartItem.module.scss';
import { StateContext } from 'src/context';

const CartItem: FC<{ item: TProduct }> = (props) => {
  const { item } = props;

  const { cart, addProduct, removeProduct } = useContext(StateContext);

  const addCount = () => {
    removeProduct(item);
  };

  const removeCount = () => {
    if (item.count === item.stock) return;
    addProduct(item);
  };

  return (
    <div className={styles.item}>
      <img src={item.images[0]} alt={item.title} className={styles.image} />
      <div className={styles.about}>
        <p className={styles.name}>{item.title}</p>
        <div className={styles.count}>
          <button type='button' onClick={addCount}>
            -
          </button>
          <span>{item.count}</span>
          <button type='button' onClick={removeCount}>
            +
          </button>
        </div>
      </div>
      <p className={styles.price}>${item.count * item.price}</p>
    </div>
  );
};

export default CartItem;
