const ProductDescription = (props) => {
  const { updateProductDescription } = props;

  const onEnterDescription = (event) => {
    updateProductDescription(event.target.value);
  };

  return (
    <>
      <div className="upload-product-details-input">
        <label htmlFor="productDescription">Product Description</label>
        <textarea
          id="productDescription"
          rows="4"
          cols="20"
          placeholder="Enter Product Description"
          onChange={onEnterDescription}
        ></textarea>
      </div>
    </>
  );
};

export default ProductDescription;
