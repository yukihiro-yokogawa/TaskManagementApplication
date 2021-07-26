import React, { useContext } from 'react';
import CreateTask from '../../containers/task/createTask';
import EditTask from '../../containers/task/editTask';
import { WorkspaceContext } from '../../context/workspace/workspace';
import {
  TaskCard,
  TaskCardGroup,
  TaskCardGroupHeader,
  TaskCardTitleText,
  TaskGroups,
} from '../../styles/taskCard';
import { TaskClientState, TaskState } from '../../types/task';
import { TaskGroupClientState } from '../../types/taskGroup';
import TaskCardComponent from './taskCard';
import TaskCardFooterComponent from './taskCardFooter';
import TaskCardGroupAddComponent from './taskCardGroupAdd';

/**
 * タスクグループを表示するコンポーネント.
 *
 * @return {*}
 */
const TaskCardGroupComponent = () => {
  const workspace = useContext(WorkspaceContext);
  return (
    <>
      <TaskGroups>
        {workspace?.TaskGroups.map(
          (
            taskGroup: TaskGroupClientState,
            index: React.Key | null | undefined
          ) => (
            <TaskCardGroup key={index}>
              <TaskCardGroupHeader>{taskGroup.Name}</TaskCardGroupHeader>
              {taskGroup?.Tasks.map(
                (
                  task: TaskClientState,
                  index2: React.Key | null | undefined
                ) => (
                  <>
                    {!task.EditTask ? (
                      <TaskCardComponent
                        key={index2}
                        taskGroupIndex={index}
                        taskIndex={index2}
                        task={task}
                      />
                    ) : (
                      <EditTask />
                    )}
                  </>
                )
              )}
              {taskGroup?.CreatedTask ? (
                <CreateTask index={index} taskGroupId={taskGroup.TaskGroupId} />
              ) : (
                <TaskCardFooterComponent index={index} />
              )}
            </TaskCardGroup>
          )
        )}
        {workspace?.CreatedTaskGroup ? (
          <TaskCardGroup>
            <TaskCardGroupHeader>test</TaskCardGroupHeader>
            <TaskCard>
              <TaskCardTitleText>テスト test</TaskCardTitleText>
            </TaskCard>
          </TaskCardGroup>
        ) : (
          <TaskCardGroupAddComponent />
        )}
      </TaskGroups>
    </>
  );
};

export default TaskCardGroupComponent;
