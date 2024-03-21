import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import { useState } from "react";
import PayPage from "./components/PayPage";

function Router() {
  const [cartList, setCartList] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  function onAddToCart(product) {
    //console.log(product);
    //añadimos al contenido del array el nuevo producto
    setCartList([...cartList, product]);
    setTotalCart(totalCart + product.price);
    console.log(cartList);
  }

  function emptyCart() {
    setCartList([]);
    setTotalCart(0);
  }

  function deleteProduct(product) {
    //Filtramos el array para obtener un nuevo array sin el producto recibido
    const newArray = cartList.filter((element) => element != product);
    setCartList(newArray);
    setTotalCart(totalCart - product.price);
  }
  var newCartList = [];
  var ids = [];
  var cont = 0;
  var finalCartList = [];

  function eliminarDuplicados(array, propiedad) {
    const unique = new Set();
    return array.filter((obj) => {
      const valor = obj[propiedad];
      if (!unique.has(valor)) {
        unique.add(valor);
        return true;
      }
      return false;
    });
  }

  newCartList = eliminarDuplicados(cartList, "id");
  //Asignamos al array finalCartList los productos a mostrar
  //añadiendo la propiedad quantity:

  for (let i = 0; i < newCartList.length; i++) {
    for (let j = 0; j < cartList.length; j++) {
      if (newCartList[i].id === cartList[j].id) {
        cont++;
      }
    }
    newCartList[i].quantity = cont;
    finalCartList.push(newCartList[i]);
    cont = 0;
  }

  console.log(finalCartList);

  return (
    <BrowserRouter>
      <NavBar
        cartList={finalCartList}
        totalCart={totalCart}
        emptyCart={emptyCart}
        deleteProduct={deleteProduct}
        totalProducts={cartList.length}
      />
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route
          exact
          path="/product/:productData"
          element={<ProductPage onAddToCart={onAddToCart} />}
        />
        <Route
          exact
          path="/paypage"
          element={
            <PayPage
              cartList={finalCartList}
              totalCart={totalCart}
              emptyCart={emptyCart}
              deleteProduct={deleteProduct}
              totalProducts={cartList.length}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
