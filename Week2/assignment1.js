const pokemons = [
  { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
  { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
  { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
  { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
  { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
  { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
  { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
  { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
  { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
  { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
  { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
];

//Yukarıdaki dizi içinde bulunan "Water" türündeki Pokemonları `filter` kullanarak filtrelemek istiyoruz.
//Filtreleme işlemi sonucunda kaç "Water" türündeki Pokemon olduğunu ve bu Pokemon'ların isimlerini bulmanız gerekiyor.
const WaterPokemons = pokemons.filter(pokemon => pokemon.type === 'Water');
console.log(`"Water" türündeki Pokemon sayısı:  ${WaterPokemons.length}`);
console.log(`"Water" türündeki Pokemon isimleri: ${WaterPokemons.map(({ name }) => name)}`);

//Yukarıdaki dizide bulunan her bir Pokemon'un deneyim puanını 2 katına çıkarmak ve bu işlem sonucunda yeni bir dizi oluşturmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un adını ve yeni deneyim puanını içermelidir.
const doubleExperience = pokemons.map(pokemon => ({ name: pokemon.name, experience: pokemon.experience * 2 }));
console.log(doubleExperience);

//Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarının en az 60 olduğu bir koşulu karşılıyor mu ?
// Ayrıca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puanı 70 veya daha fazla mı ?
// Bu iki koşulu kontrol eden ve sonuçları ekrana yazdıran bir kod yazın.
const allWaterPokemonsHighExperience = pokemons.filter(poke => poke.type === 'Water').every(poke => poke.experience > 60);
console.log("Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?", allWaterPokemonsHighExperience);
const someFirePokemonHighExperience = pokemons.filter(poke => poke.type === 'Fire').some(poke => poke.experience >= 70);
console.log("'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?", someFirePokemonHighExperience);

//Pokemon dizisinde bulunan "Electric" türündeki Pokemon'ların deneyim puanlarının toplamını
// kullanarak hesaplamak istiyorsunuz.
const totalElectricExperience = pokemons.filter(poke => poke.type === 'Electric').reduce((prev, curr) => prev + curr.experience, 0)
console.log("Electric türündeki Pokemon'ların toplam deneyim puanı: " + totalElectricExperience);

//Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.
const typeExperienceAverages = ((pokemons.map(({ experience }) => experience)).reduce((prev, curr) => prev + curr, 0) / (pokemons.length))
console.log(typeExperienceAverages);