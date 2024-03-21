import logo from "../assets/images/shopify.svg";
import cart from "../assets/images/cart-shopping-solid.svg";
import CartModal from "./CartModal";
import { useState } from "react";

function NavBar({
  cartList,
  totalCart,
  emptyCart,
  deleteProduct,
  totalProducts,
}) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center">
          <img src={logo} alt="logo" width="70" id="logo" />
          <h2 className="fw-bold p-1" id="navbar-brand">
            SHOP
          </h2>
        </div>

        <div className="d-flex justify-content-start align-items-center mx-5">
          <img
            src={cart}
            alt="logo"
            width="50"
            id="logo"
            onClick={handleShow}
          />
          <p className="text-white">{totalProducts}</p>
        </div>
      </nav>

      <CartModal
        show={show}
        handleClose={handleClose}
        cartList={cartList}
        totalCart={totalCart}
        emptyCart={emptyCart}
        deleteProduct={deleteProduct}
      />
    </>
  );
}

export default NavBar;
