import { Product } from './slices/Products/products.slice';

// todo_improv: use real API
const validateProduct = (product: Product): Promise<Product> =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            if (product.title.length === 0) {
                reject('No title');
            }
            if (product.price <= 0) {
                reject('Price is incorrect');
            }
            resolve(product);
        }, 500)
    );

export default validateProduct;
