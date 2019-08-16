import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container} from "semantic-ui-react";

const CharacterList = () => {


  const [charState, setCharState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)

      .then(response => {
        console.log("Star Wars Characters", response.data.results);
        setCharState(response.data.results);
      })
      .catch(error => {
          console.log("Characters Get", error)
      })
  }, []);

  return (
    <Container text>
          {charState.map(char => {
            return (
              <CharacterCard
                key={char.id}
                id={char.id}
                title={char.name}
                description={char.url}
                character = {char}
                homeworld = {char.homeworld}
                
              />
            );
          })}
    </Container>
  );
}

export default CharacterList;