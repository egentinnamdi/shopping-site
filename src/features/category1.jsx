import React from 'react';
import Carousel from 'react-responsive-carousel';
import "./categoryStyle.css";

const CategoriesScroller = ({ category, suggestedItemCount, imageSrc }) => {
  // Handle potential missing image scenario
  const defaultImage = "path/to/default_image.jpg"; // Replace with your default image path

  return (
    <div className="category-scroller">
      <Carousel>
        <div className="category-items-wrapper">
          <img src={imageSrc || defaultImage} alt={category} /> {/* Use default image if imageSrc is empty */}
          <h2>{category}</h2>
          <p>{suggestedItemCount} suggested items</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CategoriesScroller;
