import React, { useContext } from 'react';
import {
  WorkspaceDispatchContext,
  CREATE_TASK,
} from '../../context/workspace/workspace';
import { TaskCardFooter, TaskCardFooterText } from '../../styles/taskCard';

const TaskCardFooterComponent = (props: {
  index: React.Key | null | undefined;
}) => {
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <TaskCardFooter
      onClick={() => {
        dispatch({
          type: CREATE_TASK,
          payload: { taskGroupIndex: props.index },
        });
      }}>
      <TaskCardFooterText>+ タスクを追加</TaskCardFooterText>
    </TaskCardFooter>
  );
};

export default TaskCardFooterComponent;
