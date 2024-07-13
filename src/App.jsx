import React, { useState } from 'react';  // Solo una vez
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Login from './Login';
import './App.css';



function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Este campo es obligatorio";
    }

    if (!password) {
      validationErrors.password = "Este campo es obligatorio";
    } else if (password.length < 8) {
      validationErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes agregar la lógica para manejar el inicio de sesión
      console.log({ username, password });
      setShowAlert(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setShowAlert(false);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="mb-4">Iniciar Sesión</h1>
      <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
        {showAlert && <Alert variant="success">Inicio de sesión exitoso</Alert>}
        <Form.Group controlId="username">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="mt-4" variant="primary" block>
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
}

export default App;
