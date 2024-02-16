import styles from './CartItem.module.scss';

const CartItem = () => {
  return (
    <div className={styles.item}>
      <img className={styles.image} />
      <div className={styles.about}>
        <p className={styles.name}>Apple iPhone 9</p>
        <div className={styles.count}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <p className={styles.price}>$549</p>
    </div>
  );
};

export default CartItem;
