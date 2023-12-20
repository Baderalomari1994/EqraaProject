import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../assets/img/eqraa-logo.png'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    const logout = async () => {
        localStorage.removeItem('loggedIn');
        navigate('home');
    };
    return (
        <AppBar position="static" style={{ backgroundColor: '#042a5f'}}>
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{color: 'inherit'}}>
                    <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                </Typography>
                <div style={{ marginRight: '60px' }}>
                    <Typography variant="h6" component={Link} to="/home" style={{ marginLeft: '20px', color: 'white', textDecoration: 'none' }}>
                        الرئيسية
                    </Typography>
                    <Typography variant="h6" component={Link} to="/" style={{ marginLeft: '20px', color: 'white', textDecoration: 'none' }}
                                onClick={logout}
                    >
                        تسجيل الخروج
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
