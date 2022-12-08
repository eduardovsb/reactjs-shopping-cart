import React from 'react';
import ProductCard from './ProductCard';
import './ProductsList.scss';

const ProductsList: React.FC = () => {
    return (
        <div className="products__container">
            <h2>Games List</h2>
            <ProductCard />
        </div>
    );
};

export default ProductsList;
