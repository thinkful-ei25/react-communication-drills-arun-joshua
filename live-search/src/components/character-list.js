import React from 'react';

export default function CharacterList(props) {
  const characters = props.characters.filter(character => {
    return character.name.includes(props.searchTerm);
  }).map((character, index) => (
    <li key={index}>
      <strong>{character.name}</strong> ({character.actor}) - {character.description}
    </li>
  ));
  return <ul className="character-list">{characters}</ul>;
}
