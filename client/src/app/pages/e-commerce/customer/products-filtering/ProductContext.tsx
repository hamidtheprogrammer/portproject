import { createContext, ReactNode, useState } from "react";
import React from "react";
import { IProduct, productsSeed } from ".";

interface IProps {
  product: IProduct[] | null;
  setProduct: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext<IProps>({
  product: null,
  setProduct: () => {},
  openFilter: false,
  setOpenFilter: () => {},
});

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<IProduct[] | null>(productsSeed);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <ProductContext.Provider
      value={{ product, setProduct, openFilter, setOpenFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
