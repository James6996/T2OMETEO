import React, { useState } from 'react';
import REACTHTMLTableToExcel from 'react-html-table-to-excel';
import './Table.scss';

const Table = ({ cities }) => {
  const [selectedOption, setSelectedOption] = useState('Todas las ciudades')
  console.log(selectedOption)

  return (
    <div className="homeContainer">
      <div className="cityContainer">
      <label for="cars">Elige tu ciudad:</label>
        <select name="cities" id="cities" value={selectedOption} onChange={event => setSelectedOption(event.target.value)}>
          <option value={null}>Todas las ciudades</option>
          {cities.map(city => {
            return (
              <option value={city.name}>{city.name}</option>
            ) 
          })}
        </select>
        <REACTHTMLTableToExcel
          id='exportToExcel'
          table='table'
          filename='forecast'
          sheet='pagina 1'
          buttonText='Exportar a Excel'
        />
        <table id="table" class="cityContainer__table">
          <thead>
          <tr>
            <th>Ciudad</th>

            <th>Fecha</th>

            <th>Predicción(℃)</th>
          </tr>
            {
              selectedOption === 'Todas las ciudades' ? cities.map(city => {
              return (
                <>
                  <tr>
                    <td>{city.name}</td>
                    <td NOWRAP>{city.forecast[0].dateThreeHours.substr(0, 10)}</td>
                    <td>{city.forecast[0].temperature} ℃</td>
                  </tr>
                </>
              );
            })
            : cities
            .filter(item => item.name === selectedOption)
            .map(city => {
              return (
                <>
                  <tr>
                    <td>{city.name}</td>
                    <td NOWRAP>{city.forecast[0].dateThreeHours.substr(0, 10)}</td>
                    <td>{city.forecast[0].temperature} ℃</td>
                  </tr>
                </>
              );
            })}
            </thead>
        </table>
      
      </div>
    </div>
  );
};

export default Table;
