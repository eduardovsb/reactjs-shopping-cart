import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import ProductForm from '../components/Products/ProductForm';
import ProductsList from '../components/Products/ProductsList';

const ProductsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <h2>Products Page</h2>
            <button className="btn" onClick={toggleModal}>
                Add Product
            </button>
            <ProductsList />
            {isModalOpen && (
                <Modal title="Add Game to the Store" isOpen={isModalOpen} onClose={toggleModal}>
                    <ProductForm onClose={toggleModal} />
                </Modal>
            )}
        </div>
    );
};

export default ProductsPage;
