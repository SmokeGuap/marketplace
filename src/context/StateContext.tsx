import { FC, ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import { TProduct } from 'src/components/Product/Product.types';

type TCartProduct = TProduct & { count: number };

interface IStateContext {
  cart: TCartProduct[] | null;
  addProduct: (product: TProduct) => void;
  removeProduct: (product: TProduct) => void;
}

interface IStateProviderProps extends React.DOMAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StateContext = createContext<IStateContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
});

const StateProvider: FC<IStateProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<any>(
    JSON.parse(localStorage.getItem('cart') || '[]')
  );

  const addProduct = (product: TProduct) => {
    const findProduct = cart.find(
      (item: TCartProduct) => item.id == product.id
    );

    if (findProduct) {
      setCart([
        ...cart.filter((item: TCartProduct) => item.id !== product.id),
        { ...findProduct, count: findProduct.count + 1 },
      ]);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeProduct = (product: TProduct) => {
    const findProduct = cart.find(
      (item: TCartProduct) => item.id == product.id
    );

    if (findProduct) {
      setCart([
        ...cart.filter((item: TCartProduct) => item.id !== product.id),
        { ...findProduct, count: findProduct.count - 1 },
      ]);
    }
  };

  useEffect(() => {
    setCart([...cart.filter((item: TCartProduct) => item.count !== 0)]);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [
    cart.reduce((totalCount: number, current: TCartProduct) => {
      return totalCount + current.count;
    }, 0),
  ]);

  return (
    <StateContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
