import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./ProductDetail.scss";
import DOMPurify from "dompurify";


const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const { id } = useParams();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className="product-detail">
      <h3 className="--mt">Quality Details</h3>
      <Card cardClass="card">
        {isLoading && <SpinnerImg />}
        {product && (
          <div className="detail">

            <h3>
              <span className="badge">ORDER ID: </span>  {product.orderId}
            </h3>
            <hr/>
            <h4>
              <b>ITEM CODE : </b> {product.sku}
            </h4>
            <h4>
              <b>COMPANY NAME : </b> {product.company}
            </h4>
            <h4>
              <b>QUALITY ITEM QTY : </b>  {product.quality}
            </h4>
            <h4>
              <b>DAMAGED ITEM QTY : </b> {product.damaged}
            </h4>
            <h4>
              <b>TOTAL ITEMS IN ORDER : </b> 
              {(Number(product.damaged) + Number(product.quality))}
            </h4>
            <br/>
            <h4>
              <b>DESCRIPTION : </b> 
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description),
              }}
            >
            </div>
            <h4>
              <b>IMAGE : </b> 
            </h4>
            <Card cardClass="group">
              {product?.image ? (
                <img
                  src={product.image.filePath}
                  alt={product.image.fileName}
                  height="200px"
                  width="300px"
                />
              ) : (
                <h4>No Image Add For This Form</h4>
              )}
            </Card>
            <hr />
            <code className="--color-dark">
              Created on: {product.createdAt.toLocaleString("en-US")}
            </code>
            <br />
            <code className="--color-dark">
              Last Updated: {product.updatedAt.toLocaleString("en-US")}
            </code>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProductDetail;
