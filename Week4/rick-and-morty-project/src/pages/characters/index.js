import { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState(""); // Filtre metni için bir state ekleyin

  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const FilteredCharacters = () => {
    if (filterText) {
      return characters.filter((character) =>
        character.name.toLowerCase().includes(filterText.toLowerCase())
      );
    } else {
      return characters;
    }
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value); // Filtre metnini güncelle
  };

  return (
    <div>
      <Stack spacing={2}>
        <TextField
          id="standard-basic"
          label="Character"
          variant="standard"
          value={filterText}
          onChange={handleFilterChange} // TextField'a yazı yazılınca çalışacak fonksiyon
          sx={{ width: 300 }}
          size="small"
        />
        <CharacterCard FilteredCharacters={FilteredCharacters()} />
      </Stack>
    </div>
  );
};

export default Characters;
