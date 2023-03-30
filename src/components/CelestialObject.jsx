import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function CelestialObject(props) {
  let { name } = useParams();
  let [planet, setPlanet] = useState(null);
  let [full, setFull] = useState(false);

  useEffect(() => {
    if (!full) {
      getPlanet();
    }
  }, [])

  async function getPlanet() {
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': 'mcnUhDMBEhZG4rif7P5LtQ==tHr16zyU1qZpazUL',
        'Content-Type': 'application/json'
      },
    };
    let response = await fetch('https://api.api-ninjas.com/v1/planets?name=' + name, options)
    if (response.status == 200) {
      response = await response.json()
      console.log(response);
      setPlanet(response[0]);
      setFull(true)
    } else {
      getPlanet();
    }
  }

  return <>
    {planet ? (
      <div className="planet-info background">
        <h1>{planet.name}</h1>
        <div className="d-grid">
          <div className="l d-flex flex-column justify-content-around">
            <div><h2>{planet.mass} Jupiters</h2><p>Mass *</p></div>
            <div><h2>{planet.distance_light_year * (9.46 * (10 ** 12))} km</h2><p>Distance from earth</p></div>
            <div><h2>{planet.period} days</h2><p>Orbital period of the planet</p></div>
          </div>
          <div className="c">
            <img src={require(`../images/${planet.name}.png`)} />
          </div>
          <div className="r d-flex flex-column justify-content-around">
            <div><h2>{planet.radius} Jupiters</h2><p>Average radius of the planet **</p></div>
            <div><h2>{planet.temperature} Kelvin</h2><p>Average surface temperature of the planet ***</p></div>
          </div>
          <div className="b">
            <p>*(1 Jupiter = 1.898 * 1027 kg)</p><p>**(1 Jupiter = 69911 km)</p><p>***(0 Kelvin = 0 - 273.15 °C)</p>
          </div>
        </div>
        <Link to='/'><button className="button-back btn btn-light">Back</button></Link>
      </div>
    ) : (
      <div className='loading-screen'>
        <h1>Loading content....</h1>
        <h2>Please wait</h2>
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    )}
  </>
}