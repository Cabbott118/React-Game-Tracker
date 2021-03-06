import React, { Component } from 'react';
import PlayerInput from './PlayerInput';
import Button from './Button';

class PlayersForm extends Component {
  savePlayerData = (event) => {
    event.preventDefault();
    this.props.setGameInitialized(true);
    this.props.setupPlayerData(this.state.players);
  };

  updateName = (index, name) => {
    const players = this.props.players;

    players[index].name = name;

    this.setState({ players });
  };

  render() {
    return (
      <form className='players-form' onSubmit={this.savePlayerData}>
        <div className='players-form'>
          {getPlayerInputs(this.props.players, this.updateName)}
        </div>
        <Button
          type='submit'
          label='Start'
          wrapClass='game-start-button-wrap'
        />
      </form>
    );
  }
}

const getPlayerInputs = (players, updateName) => {
  return players.map((player, index) => (
    <div className='players-form__player' key={index}>
      <p className='player-name'>Player {index + 1} name:</p>
      <PlayerInput id={index} name={player.name} updateName={updateName} />
    </div>
  ));
};

export default PlayersForm;
