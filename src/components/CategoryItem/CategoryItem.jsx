const CategoryItem = ({ category: { title, imgUrl } }) => {
  return (
    <div className="category-container">
      <img src={imgUrl} alt={`${title} image background`} />
      <div className="category-titles-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
