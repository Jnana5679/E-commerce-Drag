const ImageCarousel = (props) => {
  const { imagesUrlList, updateSelectedImageUrl, isSelected } = props;

  const selectedButton = isSelected ? "selected-button" : "";

  const onClickImageUrlButton = () => {
    updateSelectedImageUrl(imagesUrlList["productImageUrl"]);
  };

  return (
    <li>
      <button
        onClick={onClickImageUrlButton}
        className={`image-carousel-buttons ${selectedButton}`}
      >
        <img
          src={imagesUrlList["productImageUrl"]}
          alt={imagesUrlList["_id"]}
        />
      </button>
    </li>
  );
};

export default ImageCarousel;
