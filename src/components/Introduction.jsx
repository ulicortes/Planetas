import { Link } from 'react-router-dom';
export default function Introduction() {
    let planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    
    return <>
        <div className="general-info background">
            <h1>Click a planet and know some thigs about it</h1>
            <div className='header-planets'>
                {planetList.map((p) => (
                    <div key={p} className="div-planet">
                        <h3>{p}</h3>
                        <Link to={p} >
                            <img src={require(`../images/${p}.png`)} className="planet" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
}