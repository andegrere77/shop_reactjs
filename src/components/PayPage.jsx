import { Link } from "react-router-dom";
import PayForm from "./PayForm";
import { useState } from "react";
function PayPage({
  cartList,
  totalCart,
  emptyCart,
  deleteProduct,
  totalProducts,
}) {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  return (
    <div className="container mt-5">
      <div className="mb-5">
        <Link to="/" id="previous">
          Return to shop page
        </Link>
      </div>
      {paymentCompleted === false ? (
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h4>Your Products</h4>
                {cartList.map((product) => {
                  return (
                    <div className="mb-2">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start">
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            width="60"
                            height="60"
                            className="image-cart mt-2"
                          />
                          <p className="mx-3 mt-3 text-paypage">
                            {product.title}
                          </p>
                          <p className="mt-3 text-paypage ">
                            {product.price * product.quantity}$
                          </p>
                          {product.quantity > 1 ? (
                            <p className="mt-3 mx-3 text-muted text-paypage">
                              {product.quantity} units
                            </p>
                          ) : (
                            <p className="mt-3 mx-3 text-muted text-paypage">
                              {product.quantity} unit
                            </p>
                          )}
                        </div>
                        {product.quantity > 1 ? (
                          <p
                            className="mt-3 fw-bold mx-5 delete-product text-paypage"
                            onClick={() => deleteProduct(product)}
                          >
                            -1
                          </p>
                        ) : (
                          <p
                            className="mt-3 fw-bold mx-5 delete-product text-paypage"
                            onClick={() => deleteProduct(product)}
                          >
                            X
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="card-footer">
                <h5 className="text-start">Total: {totalCart}$</h5>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <PayForm
                  emptyCart={emptyCart}
                  setPaymentCompleted={setPaymentCompleted}
                />
              </div>
            </div>
          </div>

          <div className="col-8"></div>
        </div>
      ) : (
        <div className="alert alert-success mt-5">
          Thank you for your purchase
        </div>
      )}
    </div>
  );
}

export default PayPage;
