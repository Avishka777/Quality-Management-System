import React, { useEffect } from "react";
import "./ProductSummary.scss";
import { BsCart4, BsCartX } from "react-icons/bs";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { BiCheckboxChecked } from "react-icons/bi";
import InfoBox from "../../infoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_COMPANY,
  CALC_OUTOFSTOCK,
  CALC_STORE_VALUE,
  selectCompany,
  selectOutOfStock,
  selectTotalStoreValue,
} from "../../../redux/features/product/productSlice";

// Icons
const checkIcon = <BiCheckboxChecked size={46} color="#fff" />;
const productIcon = <BsCart4 size={40} color="#fff" />;
const companyIcon = <MdOutlineFormatListNumberedRtl size={40} color="#fff" />;
const outOfStockIcon = <BsCartX size={40} color="#fff" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const totalStoreValue = useSelector(selectTotalStoreValue);
  const outOfStock = useSelector(selectOutOfStock);
  const company = useSelector(selectCompany);

  useEffect(() => {
    dispatch(CALC_STORE_VALUE(products));
    dispatch(CALC_OUTOFSTOCK(products));
    dispatch(CALC_COMPANY(products));
  }, [dispatch, products]);

  return (
    <div className="product-summary">
      <h3 className="--mt">QUALITY MANAGEMENT DASHBOARD</h3>
      <div className="info-summary">
        <InfoBox
          icon={productIcon}
          title={"TOTAL ORDERS"}
          count={`${products.length} orders`}
          bgColor="card1"
        />
        <InfoBox
          icon={checkIcon}
          title={"CHECKED ITEMS"}
          count={`${totalStoreValue} qty `}
          bgColor="card2"
        />
        
        <InfoBox
          icon={outOfStockIcon}
          title={"TOTAL DEFECTIVE"}
          count={outOfStock}
          bgColor="card3"
        />
        <InfoBox
          icon={companyIcon}
          title={"COMPANY COUNT"}
          count={company.length}
          bgColor="card4"
        />
        
      </div>
    </div>
  );
};

export default ProductSummary;
