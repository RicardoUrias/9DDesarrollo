import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Este campo es obligatorio";
    }

    if (!password) {
      validationErrors.password = "Este campo es obligatorio";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes agregar la lógica para manejar el inicio de sesión
      console.log({ username, password });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Looooogin</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </header>
    </div>
  );
}

export default App;
