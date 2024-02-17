import { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getAllProducts, getAllProductsByCategory } from 'src/API/requests';
import { Product, Pagination } from 'src/components';
import { StateContext } from 'src/context';

import styles from './Products.module.scss';
import { TProducts } from './Products.types';
import getAllProductsBySearch from 'src/API/requests/getAllProductsBySearch';

const Products: FC = () => {
  const { debouncedSearch } = useContext(StateContext);

  const [products, setProducts] = useState<TProducts>();
  const [totalCount, setTotalCount] = useState<number>();

  const [_, setSearchParams] = useSearchParams();

  const { search } = useLocation();
  const searchArray = search.split('&');
  const category = searchArray
    .find((item) => item.includes('category'))
    ?.split('=')[1];
  const skip = searchArray.find((item) => item.includes('skip'))?.split('=')[1];

  const [currentPage, setCurrentPage] = useState<number>(
    skip ? +skip / 10 + 1 : 1
  );

  useEffect(() => {
    if (category) return;
    if (debouncedSearch.length < 4) {
      getAllProducts(skip).then((data) => {
        setProducts(data.products);
        setTotalCount(data.total);
      });
    } else {
      getAllProductsBySearch(debouncedSearch).then((data) => {
        setProducts(data.products);
        setTotalCount(data.total);
      });
    }
  }, [skip, category, debouncedSearch]);

  useEffect(() => {
    if (category)
      getAllProductsByCategory(category).then((data) => {
        setProducts(data.products);
        setTotalCount(data.total);
        setCurrentPage(1);
      });
  }, [category]);

  useEffect(() => {
    if (!category) setSearchParams({ ['skip']: String(currentPage * 10 - 10) });
  }, [currentPage]);

  if (!products) return;

  return (
    <>
      {totalCount ? (
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
      ) : (
        <p className={styles.none}>
          Ничего не найдено, попробуйте изменить запрос.
        </p>
      )}
    </>
  );
};

export default Products;
