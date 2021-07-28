import React, { useState } from 'react';
import MoveTaskComponent from '~/components/task/sidebar/moveTask';

const MoveTask = () => {
  const [view, setView] = useState(false);
  const handleClick = () => {
    console.log('test');
    setView(true);
  };
  return <MoveTaskComponent view={view} handleClick={handleClick} />;
};

export default MoveTask;