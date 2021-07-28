import React, { useContext } from 'react';
import {
  EditTaskContext,
  EditTaskDispatchContext,
  MOVE_TASK,
} from '~/context/task/task';
import { EditTaskSideBarContent, EditTaskSideBarForm } from '~/styles/taskCard';

const MoveTaskComponent = () => {
  const editTask = useContext(EditTaskContext);
  const dispatch = useContext(EditTaskDispatchContext);
  return (
    <>
      <EditTaskSideBarContent
        onClick={() => {
          dispatch({ type: MOVE_TASK, payload: '' });
        }}>
        移動
      </EditTaskSideBarContent>
      {editTask.sideBar.move ? (
        <EditTaskSideBarForm>test</EditTaskSideBarForm>
      ) : (
        ''
      )}
    </>
  );
};

export default MoveTaskComponent;
