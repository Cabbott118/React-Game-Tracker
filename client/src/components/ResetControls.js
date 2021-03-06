import React from 'react';
import Button from './Button';

const ResetControls = ({ restart, reset }) => (
  <div className='reset-controls'>
    {restart && <Button handler={restart} label='Restart' />}
    {reset && <Button handler={reset} label='Reset Scores' />}
  </div>
);
export default ResetControls;
