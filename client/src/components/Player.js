import React from 'react';

const Player = (props) => {
  const { isActive, playerNumber, name, score } = props;

  let classes = 'player';

  if (isActive) {
    classes += ' player--is-active';
  }

  return (
    <li className={classes} data-player={playerNumber} data-active={isActive}>
      <p className='player__name'>{name}</p>
      <p className='player__score'>
        Score: <span className='player__score-value'>{score}</span>
      </p>
    </li>
  );
};

export default Player;
