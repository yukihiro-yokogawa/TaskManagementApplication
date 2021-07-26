import React, { useContext, useState } from 'react';
import Image from 'next/image';
import {
  TaskCard,
  TaskCardEditImage,
  TaskCardTitleText,
} from '../../styles/taskCard';
import { TaskState } from '../../types/task';
import editPic from '/public/edit.png';
import {
  EDIT_TASK,
  WorkspaceDispatchContext,
} from '../../context/workspace/workspace';

/**
 * タスクカードをタスクグループ内に表示するためのコンポーネント.
 *
 * @param {{
 *   task: TaskState;
 *   taskGroupIndex: React.Key;
 *   taskIndex: React.Key;
 * }} props
 * @return {*}
 */
const TaskCardComponent = (props: {
  task: TaskState;
  taskGroupIndex: React.Key;
  taskIndex: React.Key;
}) => {
  const { task, taskGroupIndex, taskIndex } = props;
  const [mouseEnter, setMouseOver] = useState(false);

  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <TaskCard
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}>
      <TaskCardTitleText>{task.Title}</TaskCardTitleText>
      {mouseEnter ? (
        <TaskCardEditImage
          onClick={() =>
            dispatch({
              type: EDIT_TASK,
              payload: {
                taskGroupIndex: taskGroupIndex,
                taskIndex: taskIndex,
                task: task,
              },
            })
          }>
          <Image src={editPic} alt="edit" />
        </TaskCardEditImage>
      ) : (
        ''
      )}
    </TaskCard>
  );
};

export default TaskCardComponent;
