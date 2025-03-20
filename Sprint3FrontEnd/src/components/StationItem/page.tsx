import React from 'react';
import './StationItem.css';

interface StationItemProps {
  lineNumber: string;
  lineColor: string;
  stationName: string;
  time: string;
  onShowRoute: () => void;
}

const StationItem = ({ 
  lineNumber,
  lineColor,
  stationName,
  time,
  onShowRoute
}: StationItemProps) => {
  return (
    <div className="station-item">
      {/* Indicador da Linha */}
      <div className="line-indicator" style={{ backgroundColor: lineColor }}></div>

      {/* Conteúdo Principal */}
      <div className="station-content">
        {/* Número da Linha */}
        <div className="line-number" style={{ backgroundColor: lineColor }}>
          {lineNumber}
        </div>

        {/* Detalhes da Estação */}
        <div className="station-details">
          <h3 className="station-name">{stationName}</h3>
          <span className="time">{time}</span>
        </div>

        {/* Botão de Trajeto */}
        <button 
          onClick={onShowRoute} 
          className="route-button"
        >
          Mostrar Trajeto
        </button>
      </div>
    </div>
  );
};

export default StationItem;