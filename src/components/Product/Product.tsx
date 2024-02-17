import { FC, useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

    const item = cart.find((item) => item.id === product.id);

    if (item) {
      if (item.count > 0) setInCart(true);
      else setInCart(false);
    }
  }, [cart]);

  const settings = {
    arrows: false,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.product}>
      <p className={styles.sale}>
        <span>{product.discountPercentage}%</span>
        <span>off sale</span>
      </p>
      <Slider className={styles.slider} {...settings}>
        {product.images.map((image, id) => (
          <img
            key={id}
            src={image}
            alt={product.title}
            className={styles.image}
          />
        ))}
      </Slider>
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
