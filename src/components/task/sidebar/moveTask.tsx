import React from 'react';
import { EditTaskSideBarContent, EditTaskSideBarForm } from '~/styles/taskCard';

const MoveTaskComponent = (props: {
  view: boolean;
  handleClick: () => void;
}) => {
  return (
    <>
      <EditTaskSideBarContent onClick={() => props.handleClick}>
        移動
      </EditTaskSideBarContent>
      {props.view ? <EditTaskSideBarForm>test</EditTaskSideBarForm> : ''}
    </>
  );
};

export default MoveTaskComponent;
