import store from "./redux/store";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

const App = ()=>{

  return(
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products-details" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
    </Provider>

  )

}

export default App