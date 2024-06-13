import PropTypes from "prop-types";

export default function PokemonCard({ pokemon }) {
  
  return <figure>
    {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="bulbasaur" /> : <p>???</p>}
    <figcaption>{pokemon.name}</figcaption>
  </figure>
  
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    imageSRC: PropTypes.string,
  }).isRequired,
}



