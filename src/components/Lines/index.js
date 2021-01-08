import React, { useState , useEffect} from 'react';
import { Line } from 'react-chartjs-2';

import './Lines.scss';

const Lines = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    cities[0] && setSelectedCity(cities[0])
  }, [cities])

  const data = {
    labels: selectedCity && selectedCity.forecast.map(day => day.dateThreeHours),
    datasets: [
      {
        label: selectedCity && selectedCity.name,
        backgroundColor: 'rgb(6, 84, 253)',
        borderWidht: 1,
        pointBackgroundColor: 'rgb(1, 1, 1 )',
        pointBorderColor: 'rgb(1, 1, 1 )',
        data: selectedCity && selectedCity.forecast.map(day => day.temperature),
      },
    ],
  };
  const opciones = {
    maintainAspectradio: false,
    responsive: true,
  };
  return (
    <div className="graphLine" style={{ width: '90%', height: '400px' }}>
      <h3>Gráfica de Lineal</h3>
      <label for="cars">Elige tu ciudad:</label>
      <select
        name="cities"
        id="cities"
        value={selectedCity.name}
        onChange={event => setSelectedCity(cities.find(item => item.name === event.target.value))}
      >
        <option value={null}>Todas las ciudades</option>
        {cities.map(city => <option value={city.name}>{city.name}</option>)}
      </select>
      {selectedCity && <Line data={data} options={opciones}></Line>}
    </div>
  );
};

export default Lines;
