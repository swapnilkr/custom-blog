import React from 'react';
import '../styles/CategoryDropdown.css';

const CategoryDropdown = ({ categories, setSelectedCategory }) => {
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="category-dropdown">
            <select onChange={handleCategoryChange} className="styled-select">
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category.ID} value={category.slug}>{category.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;
