import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import env from "../env-config";
import { useNavigate } from 'react-router-dom';


const apiUrl = env.apiUrl
const loginUrl = `${apiUrl}/api/v1/unauth/login`
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    const handleLogin = async () => {
        try {
            const response = await axios.post(loginUrl, {
                email: email,
                password: password,
            });
            if(response.data.success) {
                localStorage.setItem('loggedIn', true)
                navigate('/home')
            }

        } catch (error) {
            console.error('Login failed:', error.response.data.message);

            const errorMessage = Array.isArray(error.response.data) ? error.response.data[0].message : error.response.data.message;

            // Log the entire error response
            console.log('Full error response:', error.response.data.message);
            setError(errorMessage);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h4" gutterBottom>
                    تسجيل الدخول
                </Typography>

                <form>
                    <TextField
                        label="البريد الالكتروني"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        style={{textAlign:'right'}}
                    />

                    <TextField
                        label="كلمة المرور"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />

                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        دخول
                    </Button>
                    {error && <Alert severity="error" style={{ marginTop: '20px' }}>{error}</Alert>}
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
