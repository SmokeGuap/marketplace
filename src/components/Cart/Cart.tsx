import { FC, useContext, useEffect, useState } from 'react';

import { CartIcon, CloseIcon } from 'src/assets/icons';
import { CartItems } from 'src/components';
import { StateContext } from 'src/context';
import { useScrollBlock } from 'src/hooks';

import styles from './Cart.module.scss';

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useContext(StateContext);

  const [blockScroll, allowScroll] = useScrollBlock();

  const openCart = () => {
    blockScroll();
    setIsOpen(true);
  };

  const closeCart = () => {
    allowScroll();
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
            {cart.length === 0 ? (
              <p className={styles.empty}>cart is empty :(</p>
            ) : (
              <CartItems />
            )}
            {cart.length > 0 && (
              <div className={styles.totalWrapper}>
                <p className={styles.countPosition}>{`${cart.length} ${
                  cart.length > 1 ? 'positions' : 'position'
                }`}</p>
                <p className={styles.totalPrice}>
                  $
                  {cart.reduce((totalCount: number, current) => {
                    return totalCount + current.count * current.price;
                  }, 0)}
                </p>
              </div>
            )}
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
