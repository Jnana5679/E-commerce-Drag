const ProductQtyAndPrice = (props) => {
  const { updateProductQuantity, updateProductPrice } = props;

  const onEnterProductQty = (event) => {
    updateProductQuantity(event.target.value);
  };

  const onEnterProductPrice = (event) => {
    updateProductPrice(event.target.value);
  };

  return (
    <>
      <div className="upload-product-details-input">
        <label htmlFor="productQtyOrWeight">Set Product Quantity</label>
        <input
          onChange={onEnterProductQty}
          type="text"
          id="productQtyOrWeight"
          placeholder="Enter Product qty or weight"
        />
      </div>
      <div className="upload-product-details-input">
        <label htmlFor="productPrice">Product Price</label>
        <input
          onChange={onEnterProductPrice}
          type="number"
          id="productPrice"
          placeholder="Enter Product Price"
        />
      </div>
    </>
  );
};

export default ProductQtyAndPrice;
