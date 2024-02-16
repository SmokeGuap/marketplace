import { CartItem } from 'src/components';

import styles from './CartItems.module.scss';

const CartItems = () => {
  return (
    <div className={styles.items}>
      <CartItem />
    </div>
  );
};

export default CartItems;
