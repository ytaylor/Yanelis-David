import React from 'react';
import Boda from './components/Boda'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      {/* Puedes envolverlo en proveedores de contexto o rutas si lo necesitas más adelante */}
      <Boda />
    </div>
  );
}

export default App;