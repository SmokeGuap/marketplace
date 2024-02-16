import { CartIcon } from 'src/assets/icons';

import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartIcon />
      <p>cart</p>
    </div>
  );
};

export default Cart;
