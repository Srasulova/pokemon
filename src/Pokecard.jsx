import Pokedex from "./Pokedex";
import "./Pokecard.css"


const Pokecard = ({}) => {
  const pokemons = Pokedex;
  return (
    <>
<div className="Pokecard-div">
  <ul className="Pokecard-list">
    {pokemons.map(p=> <li key={p.id} className="Pokecard-list-item">
     <p className="Pokecard-name">{p.name}</p> 
     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt="pokemon" />
     <p>Type: {p.type}</p>
     <p>EXP:{p.base_experience} </p>
    </li>)}
  </ul>
</div>
    </>
  );
};

export default Pokecard;
