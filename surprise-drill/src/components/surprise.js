import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: false,
    };
  }

  toggleImage() {
    this.setState({ image: !this.state.image });
  }

  render() {
    // Show the button to start with
    if (this.state.image) {
      return <SurpriseImage />;
    }

    return <SurpriseButton onClick={() => this.toggleImage()} />;
  }
}
