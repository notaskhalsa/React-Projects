import React from "react";

const Categories = (props: { categories: string[]; filterItems: any }) => {
  const { categories, filterItems } = props;
  return (
    <div className="btn-container">
      {categories.map((category: string, index: number) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
