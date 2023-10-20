const FirstComponent = (props) => {
    console.log(props);
    const { title, pokemon, text, number } = props;
    return (
        <div>
            <div>{title}</div>
            <div>Hello {pokemon.name}! Your type is {pokemon.type} and your experience is {pokemon.experience}.</div>
            <div>{text}</div>
            <div>Catched Pokémons : {number}</div>
        </div>
    );
};
export default FirstComponent;