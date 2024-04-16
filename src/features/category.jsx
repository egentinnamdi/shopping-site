import React from 'react';
import CategoriesScroller from './CategoriesScroller';

const categories = [
  { category: 'Home', imageSrc: 'path/to/home_image.jpg', suggestedItemCount: 12 },
  { category: 'Fashion', imageSrc: 'path/to/fashion_image.jpg', suggestedItemCount: 8 },
  // ... and so on for other categories
];

const CategoryHead = () => {
  return (
    <div>
      {categories.map(category => (
        <CategoriesScroller
          key={category.category}
          category={category.category}
          suggestedItemCount={category.suggestedItemCount}
          imageSrc={category.imageSrc} // Pass image source from each category object
        />
      ))}
    </div>
  );
};

export default CategoryHead;
