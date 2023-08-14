const ProductDiscount = (props) => {
  const { updateProductDiscount } = props;

  const onEnterDiscount = (event) => {
    updateProductDiscount(event.target.value);
  };

  return (
    <>
      <div className="upload-product-details-input">
        <label htmlFor="productDiscount">Product Discount</label>
        <input
          onChange={onEnterDiscount}
          type="number"
          placeholder="Enter Discount"
        />
      </div>
    </>
  );
};

export default ProductDiscount;
