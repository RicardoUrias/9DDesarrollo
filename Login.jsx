import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/profile')
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    // Enviar el token a tu backend para autenticación
    axios.post('/auth/google', { idToken: credential })
      .then(response => {
        setUser(response.data); // Maneja la respuesta del backend
      })
      .catch(err => console.log(err));
  };

  const handleLogout = () => {
    axios.get('/logout')
      .then(() => setUser(null))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Bienvenido, {user.displayName || 'Usuario'}</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={(error) => console.log('Login Failed:', error)}
        />
      )}
    </div>
  );
};

export default Login;
