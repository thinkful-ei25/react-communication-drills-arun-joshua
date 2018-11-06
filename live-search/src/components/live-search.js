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

  render() {
    return (
      <div className="live-search">
        <SearchForm onChange={(term) => this.updateSearchTerm(term)} />
        <CharacterCount count={this.props.characters.length} />
        <CharacterList
          characters={this.props.characters}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}
