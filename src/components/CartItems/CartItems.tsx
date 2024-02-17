import { FC, useContext } from 'react';

import { CartItem } from 'src/components';
import { StateContext } from 'src/context';

import styles from './CartItems.module.scss';

const CartItems: FC = () => {
  const { cart } = useContext(StateContext);

  if (!cart) return;

  return (
    <div className={styles.items}>
      {cart
        .sort((a, b) => a.id - b.id)
        .map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default CartItems;
