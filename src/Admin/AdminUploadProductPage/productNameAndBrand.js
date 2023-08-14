const ProductNameAndBrandInput = (props) => {
  const { updateProductName, updateProductBrand } = props;

  const onEnterProductName = (event) => {
    updateProductName(event.target.value);
  };

  const onEnterBrand = (event) => {
    updateProductBrand(event.target.value);
  };

  return (
    <>
      <div className="upload-product-details-input">
        <label htmlFor="productBrand">Product Brand</label>
        <input
          onChange={onEnterBrand}
          id="productBrand"
          placeholder="Enter Product Brand"
        />
      </div>
      <div className="upload-product-details-input">
        <label htmlFor="productName">Product Name</label>
        <input
          onChange={onEnterProductName}
          id="productName"
          type="text"
          placeholder="Enter Product Name"
        />
      </div>
    </>
  );
};

export default ProductNameAndBrandInput;
