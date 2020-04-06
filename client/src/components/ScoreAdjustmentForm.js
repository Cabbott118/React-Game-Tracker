import React from 'react';

const ScoreAdjustmentForm = ({ handler }) => {
  return (
    <div className='score-updater'>
      <form id='scoreAdjustmentForm' onSubmit={handler}>
        <input
          className='_input'
          id='scoreInput'
          type='number'
          pattern='^-?([0-9]{1,9})$'
          maxLength='9'
        />
        <input
          className='score_input_button'
          type='submit'
          value='Add to Score'
        />
      </form>
    </div>
  );
};

export default ScoreAdjustmentForm;
