import { FC, useEffect, useState } from 'react';

import getAllProducts from 'src/API/requests/getAllProducts';
import { Product } from 'src/components';

import styles from './Products.module.scss';
import { TProducts } from './Products.types';
import Pagination from '../Pagination';

const Products: FC = () => {
  const [products, setProducts] = useState<TProducts>();
  const [totalCount, setTotalCount] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getAllProducts(currentPage).then((data) => {
      setProducts(data.products);
      setTotalCount(data.total);
    });
  }, [currentPage]);

  if (!products || !totalCount) return;

  return (
    <>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={10}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
