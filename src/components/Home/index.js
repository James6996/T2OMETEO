import React from 'react'
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <div className='home__image'>
            <h3 className='home__title'>Jaime García Estévez</h3>

          <img src="/images/t2ofoto.png" alt="foto"/>
            </div>
            <div className='home__text'>
                <h4 className='home__subtitle' >Desarrollo</h4>
                <p>Este proyecto lo he realizado en dos partes:
                    <br/> -Backend: Desarrollado en Node.js con Express.js, y he utilizado Mongo.DB para 
                    la base de datos, la cual se puede ver de una manera más dinámica a través de Mongo-Atlas.
                    <br/> -Frontend: Desarrollado en React.js y las gráficas con una librería llamada Chart.js.
                </p>
                <h4 className='home__subtitle' >Opinión personal</h4>
                <p>Creo que ha sido un proyecto bastante completo, en el que he tenido que tratar y cruzar 
                los datos de la API de Openweather y volcarlos en un BBDD, que configuré previamente. <br/>
                Me ha gustado trabajar con una librería nueva (Chart.js), y un paquete npm que también desconocía (ReactHTMLTableToExcel) ya que no los conocía y creo que son 
                herramientas muy buenas para realizar distintos gráficos y exportaciones a Excel.</p>

            </div>
        </div>
    )
}
export default Home