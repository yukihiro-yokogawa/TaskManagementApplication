import React, { useContext } from 'react';
import {
  WorkspaceDispatchContext,
  CREATE_TASK_GROUP,
} from '../../context/workspace/workspace';
import { TaskCardGroupAdd, TaskCardTitleText } from '../../styles/taskCard';

/**
 * タスクグループを追加するボタンを表示するコンポーネント.
 *
 * @return {*}
 */
const TaskCardGroupAddComponent = () => {
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <TaskCardGroupAdd
      onClick={() => {
        dispatch({ type: CREATE_TASK_GROUP, payload: '' });
      }}>
      <TaskCardTitleText>+ タスクグループを追加</TaskCardTitleText>
    </TaskCardGroupAdd>
  );
};

export default TaskCardGroupAddComponent;
