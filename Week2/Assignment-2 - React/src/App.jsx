import FirstComponent from './components/FirstComponent';

function App() {
  const pokemon = {
    name: "Pikachu",
    type: "Electric",
    experience: 999
  };
  return (
    <div>
      <FirstComponent
        title="Pokémon!"
        pokemon={pokemon}
        text="Gotta Catch 'Em All"
        number='00126'
      />
    </div>
  );
}

export default App;