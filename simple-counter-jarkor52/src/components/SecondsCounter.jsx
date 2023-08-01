import React from 'react';

function SecondsCounter(props) {
  const seconds = props.seconds;

  // Función para formatear el tiempo en formato HH:mm:ss
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="seconds-counter">
      <i className="fas fa-clock"></i>
      <span>{formatTime(seconds)}</span>
    </div>
  );
}

export default SecondsCounter;
