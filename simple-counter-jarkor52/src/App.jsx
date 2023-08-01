import React from 'react';
import SecondsCounter from './components/SecondsCounter'; // Importamos el componente SecondsCounter

function App() {
  return (
    <div className="App">
      <h1>Contador de Segundos</h1>
      <SecondsCounter seconds={0} />
    </div>
  );
}

export default App;

