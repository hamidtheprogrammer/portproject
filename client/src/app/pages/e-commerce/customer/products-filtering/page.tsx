"use client";
import ProductContextProvider from "./ProductContext";
import Main from "./Main";

const page = () => {
  return (
    <ProductContextProvider>
      <Main />
    </ProductContextProvider>
  );
};

export default page;
