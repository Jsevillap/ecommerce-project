import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
