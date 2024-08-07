const Pokecard = ({name, image, type}) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt=""></img>
      <p>{type}</p>
    </>
  );
};

export default Pokecard;
