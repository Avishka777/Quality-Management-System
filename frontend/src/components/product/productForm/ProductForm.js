import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleInputChangeNum,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          
          <label>ORDER ID:</label>
          <input
            type="text"
            placeholder="ENTER ORDER ID"
            name="orderId"
            value={product?.orderId}
            onChange={handleInputChange}
          />

          <label>COMPANY NAME:</label>
          <input
            type="text"
            placeholder="ENTER COMPANY NAME"
            name="company"
            value={product?.company}
            onChange={handleInputChange}
          />

          <label>ITEM CODE:</label>
          <input
            type="text"
            placeholder="ENTER ITEM CODE"
            name="sku"
            value={product?.sku}
            onChange={handleInputChange}
          />

          <label>QUALITY ITEM QTY :</label>
          <input
            type="text"
            placeholder="ENTER DAMAGED ITEM QTY"
            name="quality"
            value={product?.quality}
            onChange={handleInputChangeNum}
          />

          <label>DAMAGED ITEM QTY :</label>
          <input
            type="text"
            placeholder="ENTER DAMAGED ITEM QTY"
            name="damaged"
            value={product?.damaged}
            onChange={handleInputChangeNum}
          />

          <label>ADDITIONAL INFORMATIONS :</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />
          <br />
          <label>DAMAGED ITEMS IMAGES :</label>
          <Card cardClass={"group"}>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>No Image Set For This Form.</p>
            )}
          </Card>

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
