import React, { Component } from 'react';
import PlayersForm from '../components/PlayersForm';

class GameSetup extends Component {
  render() {
    return (
      <div className='game-setup'>
        <p>Please enter a name for each player.</p>
        <PlayersForm
          players={this.props.players}
          setGameInitialized={this.props.setGameInitialized}
          setupPlayerData={this.props.setupPlayerData}
        />
      </div>
    );
  }
}

export default GameSetup;
