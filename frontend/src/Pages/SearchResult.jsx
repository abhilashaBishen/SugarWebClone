
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCategory from '../Components/ProductCategory/ProductCategory';
import ProductCard from '../Components/ProductCard/ProductCard';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  // Map the query to the corresponding category
  const categoryMap = {
    lips: "lips",
    eyes: "eyes",
    face: "face",
    nails: "nails",
  };

  // Determine which category to show based on the query
  const category = categoryMap[query.toLowerCase()];

  return (
    <div>
      {category ? (
        <ProductCategory category={category} />
      ) : (
        <p>No products found for "{query}".</p>
      )}
    </div>
  );
}

export default SearchResults;
