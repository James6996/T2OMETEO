import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import './Bars.scss';

  
const Bars = ({ cities }) => {
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    cities[0] && setSelectedDate(cities[0].forecast[0].dateThreeHours)
  }, [cities]) 

    const data = {
      labels: cities.map((city) => city.name),
      datasets:[{
        label:'Ciudades',
        backgroundColor:'rgb(6, 84, 253)',
        borderWidht:4,
        borderColor:'rgb(1,1,1)',
        data: selectedDate && cities.map((city) => {
          const matchingCity = city.forecast.find(day => day.dateThreeHours === selectedDate)
          return matchingCity.temperature
        })
      }]
    };
    const opciones = {
      maintainAspectradio:false,
      responsive:true,
    }

    return(
      <div className='graphBar' style={{ width: '90%', height: '500px' }}>
        <h3>Gráfica de barras</h3>
        <label for="cities">Elige la fecha que quieras consultar:</label>
        <select name="cities" id="cities" value={selectedDate} onChange={event => setSelectedDate(event.target.value)}>
          <option value={null}>Fechas disponibles</option>
          {cities[0] && cities[0].forecast.map(day => {
            return (
              <option value={day.dateThreeHours}>{day.dateThreeHours}</option>
            ) 
          })}
        </select>
        <Bar data={data} options={opciones}></Bar>
      </div>
    )
  
};

export default Bars;
