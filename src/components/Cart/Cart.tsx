import { FC, useState } from 'react';

import { CartIcon, CloseIcon } from 'src/assets/icons';

import styles from './Cart.module.scss';

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openCart} type='button' className={styles.cart}>
        <CartIcon />
        <p>cart</p>
      </button>
      {isOpen && (
        <div onClick={closeCart} className={styles.modal}>
          <div onClick={(e) => e.stopPropagation()} className={styles.content}>
            <div className={styles.header}>
              <div className={styles.cart}>
                <CartIcon />
                <p>cart</p>
              </div>
              <CloseIcon onClick={closeCart} className={styles.closeIcon} />
            </div>
            <p className={styles.empty}>cart is empty :(</p>
            <button
              onClick={closeCart}
              type='button'
              className={styles.backButton}
            >
              back to products
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
