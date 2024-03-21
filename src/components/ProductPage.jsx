import { useParams, Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

function ProductPage({ onAddToCart }) {
  //Recogemos los datos de la url con el mismo nombre del
  //parámetro de la ruta
  const { productData } = useParams();
  //Convertimos los datos a javascript
  const product = JSON.parse(productData);
  console.log(product);

  //Accedemos a las imágenes del producto:
  var images = [];
  for (let i = 0; i < product.images.length; i++) {
    images.push({ original: product.images[i], thumbnail: product.images[i] });
  }

  return (
    <div className="container mt-5">
      <div className="mb-5">
        <Link to="/" id="previous" className="mb-5">
          Previous page
        </Link>
      </div>
      <div className="row">
        <div className="col">
          <ImageGallery items={images} />
        </div>
        <div className="col">
          <h4 className="text-start">{product.title}</h4>
          <p className="text-start mt-5">
            <span className="fw-bold">Brand: </span>
            {product.brand}
          </p>
          <p className="text-start">
            <span className="fw-bold">Description: </span>
            {product.description}
          </p>
          <p className="text-start">
            <span className="fw-bold">Price: </span>
            {product.price}${" "}
            <span className="text-danger">-{product.discountPercentage}%</span>
          </p>
          <p className="text-start">
            <span className="fw-bold">Rating: </span>
            {product.rating}
          </p>

          <div className="card card-category">
            <div className="card-body">{product.category}</div>
          </div>
          <div className="d-flex justify-content-start mt-5">
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
