import { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import { Stack, TextField } from "@mui/material";
import InfoCard from "../../components/InfoCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [favorites, setFavorites] = useState([]);
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
    setFilterText(e.target.value);
  };

  return (
    <div>
      <Stack spacing={2}>
        <TextField
          id="standard-basic"
          label="Character"
          variant="standard"
          value={filterText}
          onChange={handleFilterChange}
          sx={{ width: 300 }}
          size="small"
        />
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <InfoCard FilteredCharacters={FilteredCharacters()} />
        </Stack>
      </Stack>
    </div>
  );
};

export default Characters;