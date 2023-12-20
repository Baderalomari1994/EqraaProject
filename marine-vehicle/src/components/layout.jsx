// components/Layout.jsx
import React from 'react';
import Nav from './nav';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
    <div style={{ display: 'flex'}}>
            <Sidebar />
            <div style={{margin:'50px', width:'100%'}}>
                {children}
            </div>
        </div>
        </div>
    );
};

export default Layout;
