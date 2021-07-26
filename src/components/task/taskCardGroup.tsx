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
            taskGroupIndex: React.Key | null | undefined
          ) => (
            <TaskCardGroup key={taskGroupIndex}>
              <TaskCardGroupHeader>{taskGroup.Name}</TaskCardGroupHeader>
              {taskGroup?.Tasks.map(
                (
                  task: TaskClientState,
                  taskIndex: React.Key | null | undefined
                ) => (
                  <>
                    {!task.EditTask ? (
                      <TaskCardComponent
                        key={taskIndex}
                        taskGroupIndex={taskGroupIndex}
                        taskIndex={taskIndex}
                        task={task}
                      />
                    ) : (
                      <EditTask
                        key={taskIndex}
                        taskGroupIndex={taskGroupIndex}
                        taskIndex={taskIndex}
                      />
                    )}
                  </>
                )
              )}
              {taskGroup?.CreatedTask ? (
                <CreateTask
                  taskGroupIndex={taskGroupIndex}
                  taskGroupId={taskGroup.TaskGroupId}
                />
              ) : (
                <TaskCardFooterComponent index={taskGroupIndex} />
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
