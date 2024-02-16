import { FC } from 'react';

import { useHorizontalScroll } from 'src/hooks';

import styles from './Categories.module.scss';

const Categories: FC = () => {
  const scrollRef = useHorizontalScroll();
  
  return (
    <div ref={scrollRef} className={styles.categories}>
      <p className={styles.category}>all</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
      <p className={styles.category}>smartphones</p>
      <p className={styles.category}>laptops</p>
    </div>
  );
};

export default Categories;
