export default function CelestialObject(props) {
    let { data } = props;
    return <>
        <div>
            <h1>{data.name}</h1>
            <h2>Masa : {data.mass} Jupiter (1 Jupiter = 1.898 x 10^27 kg)</h2>
            <h2>Temperatura : {data.temperature} kelvin (1 kelvin = -272.15 °C)</h2>
            <h2>Radio : {data.radius} Jupiter (1 Jupiter = 69911 km)</h2>
            <h2>Periodo de rotacion al Sol: {data.period} dias</h2>
            <h2>Distancia a la Tierra : {data.distance_light_year} años luz (1 año luz = 9.461e+12 km )</h2>
        </div>
    </>
}