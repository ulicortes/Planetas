import './App.css';
import CelestialObject from './components/CelestialObject';
import { useState } from 'react';

function App() {
  let celestialObjs = [
    {
      oName: "Mercury",
      source: require('./images/Mercury.png')
    },
    {
      oName: "Venus",
      source: require('./images/Venus.png')
    },
    {
      oName: "Earth",
      source: require('./images/Earth.png')
    },
    {
      oName: "Mars",
      source: require('./images/Mars.png')
    },
    {
      oName: "Jupiter",
      source: require('./images/Jupiter.png')
    },
    {
      oName: "Saturn",
      source: require('./images/Saturn.png')
    },
    {
      oName: "Uranus",
      source: require('./images/Uranus.png')
    },
    {
      oName: "Neptune",
      source: require('./images/Neptune.png')
    },
  ];

  let [planet, setPlanet] = useState(null);

  async function seeInfo(n) {
    let info = await fetch("https://api.api-ninjas.com/v1/planets?name=" + n, {
      headers: { 'X-Api-Key': 'mcnUhDMBEhZG4rif7P5LtQ==tHr16zyU1qZpazUL' },
      contentType: 'application/json'
    });
    let p = await info.json();
    setPlanet(p[0]);
  }

  return (
    <div className="App">
      <header className="App-header">
        {planet ?
          (<>
            <CelestialObject data={planet} />
            <button onClick={() => setPlanet(null)}>Volver</button>
          </>) :
          (
            celestialObjs.map((p) => (
              <div key={p.oName}>
                <a onClick={() => { seeInfo(p.oName) }}>
                  <img src={p.source} className="planet" />
                </a>
              </div>
            ))
          )
        }
      </header>
    </div>
  );
}

export default App;
