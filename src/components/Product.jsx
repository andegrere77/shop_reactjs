import star from "../assets/images/star-solid.svg";
import { Link } from "react-router-dom";
function Product({ product }) {
  // transformamos los datos alojados en product a texto para poder ser enviados a través de una URL
  const productData = encodeURIComponent(JSON.stringify(product));
  return (
    <div className="col">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h6>{product.title}</h6>
            <h6>{product.price}$</h6>
          </div>
          <Link to={`/product/${productData}`}>
            <img
              className="object-fit-cover"
              width="100%"
              height="200px"
              src={product.thumbnail}
              alt=""
            />
          </Link>
          <p className="mt-3">{product.description}</p>

          <div className="d-flex justify-content-start align-items-center">
            <p className="text-start">{product.rating}</p>
            <img width="25" src={star} alt="" className="mx-3 star" />
          </div>

          <p className="text-start text-danger fw-bold">
            Discount: {product.discountPercentage}%
          </p>
          <div className="d-flex justify-content-end align-items-center">
            <div className="card">
              <div className="card-body">{product.category}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
