import React from 'react';
import ProductList from './ProductList';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { ViewProduct } from './ViewProduct';

export default function Product() {
  return (
    <React.Fragment>
      <h1>Product List</h1>
      <ProductList />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/view-product/:id" component={ViewProduct}></Route>
        </Routes>
      </BrowserRouter> */}
    </React.Fragment>
  );
}
