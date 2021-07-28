import React, { useContext } from 'react';
import {
  EditTaskContext,
  EditTaskDispatchContext,
  MOVE_TASK,
} from '~/context/task/task';
import { FlexBox } from '~/styles/main';
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
        <EditTaskSideBarForm>
          <FlexBox justifyContent="space-between" alignItems="stretch">
            <header>タスクを移動</header>
            <button>x</button>
          </FlexBox>
          <div>
            <label>タスクグループ</label>
            <label>位置</label>
          </div>
        </EditTaskSideBarForm>
      ) : (
        ''
      )}
    </>
  );
};

export default MoveTaskComponent;
