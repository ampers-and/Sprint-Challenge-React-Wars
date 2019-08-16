import React from "react";
import { Card } from "semantic-ui-react";

const CharacterCard = (props) => {
  
  return (
      <Card>
        <Card.Content>
          <Card.Header>Character Name: {props.title}</Card.Header>
          <Card.Meta>
        <span className='date'>Homeworld: {props.homeworld}</span>
      </Card.Meta>
          <Card.Description>Species: {props.description}</Card.Description>
        </Card.Content>
      </Card>
  );
};
export default CharacterCard;