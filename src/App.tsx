import { Provider } from 'react-redux';
import './App.scss';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import MainNavigation from './components/Navigation/MainNavigation';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { useState } from 'react';

const App: React.FC = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);
    const drawerToggleClickHandler = () => {
        return setSideDrawerOpen(!sideDrawerOpen);
    };

    const backdropClickHandler = () => {
        return setSideDrawerOpen(false);
    };

    let backdrop;
    if (sideDrawerOpen) {
        backdrop = <Backdrop click={backdropClickHandler} />;
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div style={{ height: '100%' }}>
                    <MainNavigation drawerClickHandler={drawerToggleClickHandler} />
                    <SideDrawer show={sideDrawerOpen} />
                    {backdrop}
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/cart" element={<CartPage />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
