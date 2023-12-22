// AppRouter.jsx
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Layout from '../components/layout';
import ServiceDetails from '../pages/ServiceDetails';
import InformationForm from '../pages/InformationForm';

const isLoggedIn = localStorage.getItem('loggedIn');

const isAuthenticated = () => {
    return !!isLoggedIn;
};

function PrivateRoute({ element, path }) {
    return isAuthenticated() ? (
        element
    ) : (
        <Navigate to="/" replace state={{ from: path }} />
    );
}

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />
                <Route
                    path="/home"
                    element={<PrivateRoute element={<Layout><Home /></Layout>} path="/home" />}
                />
                <Route
                    path="/service/:id"
                    element={<PrivateRoute element={<Layout><ServiceDetails /></Layout>} path="/service/:id" />}
                />
                <Route
                    path="/information-form"
                    element={<PrivateRoute element={<Layout><InformationForm /></Layout>} path="/information-form" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
