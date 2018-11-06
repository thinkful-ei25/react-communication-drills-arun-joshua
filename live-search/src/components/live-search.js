import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  updateSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  filterCharacters() {
    const searchRe = new RegExp(this.state.searchTerm, 'i');
    return this.props.characters.filter((character) => character.name.match(searchRe));
  }

  render() {
    const characters = this.filterCharacters();
    return (
      <div className="live-search">
        <SearchForm onChange={(term) => this.updateSearchTerm(term)} />
        <CharacterCount count={characters.length} />
        <CharacterList characters={characters} />
      </div>
    );
  }
}
