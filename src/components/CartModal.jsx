import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function CartModal({
  show,
  handleClose,
  cartList,
  totalCart,
  emptyCart,
  deleteProduct,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>My Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cartList.length > 0 ? (
          cartList.map((product, index) => {
            return (
              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-start">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width="60"
                      height="60"
                      className="image-cart"
                    />
                    <p className="mx-3 mt-3">{product.title}</p>
                    <p className="mt-3">{product.price * product.quantity}$</p>
                    {product.quantity > 1 ? (
                      <p className="mt-3 mx-3 text-muted">
                        {product.quantity} units
                      </p>
                    ) : (
                      <p className="mt-3 mx-3 text-muted">
                        {product.quantity} unit
                      </p>
                    )}
                  </div>
                  {product.quantity > 1 ? (
                    <p
                      className="mt-3 fw-bold mx-5 delete-product"
                      onClick={() => deleteProduct(product)}
                    >
                      -1
                    </p>
                  ) : (
                    <p
                      className="mt-3 fw-bold mx-5 delete-product"
                      onClick={() => deleteProduct(product)}
                    >
                      X
                    </p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <h5>The cart is empty</h5>
        )}
      </Modal.Body>

      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <p className="mt-3 mx-5">{totalCart}$</p>
          <div className="d-flex justify-content-end">
            {cartList.length > 0 && (
              <>
                <button
                  className="btn btn-outline-danger mt-3"
                  onClick={emptyCart}
                >
                  Empty cart
                </button>
                <Link to={"/paypage"} className="btn btn-primary mx-3 mt-3">
                  Go to pay
                </Link>
              </>
            )}
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
