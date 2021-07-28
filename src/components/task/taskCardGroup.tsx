import React, { useContext } from 'react';
import CreateTask from '~/containers/task/create/createTask';
import CreateTaskGroup from '~/containers/task/create/createTaskGroup';
import EditTask from '~/containers/task/edit/editTask';
import EditTaskGroup from '~/containers/task/edit/editTaskGroup';
import { EditTaskContext, EditTaskDispatchContext } from '~/context/task/task';
import {
  CHANGE_TASK_GROUP,
  WorkspaceContext,
  WorkspaceDispatchContext,
} from '~/context/workspace/workspace';
import {
  TaskCardGroup,
  TaskCardGroupHeader,
  TaskGroups,
} from '~/styles/taskCard';
import { editTaskInitialState, TaskClientState } from '~/types/task';
import { TaskGroupClientState } from '~/types/taskGroup';
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
  const workspaceDispatch = useContext(WorkspaceDispatchContext);
  return (
    <>
      <TaskGroups>
        {workspace?.TaskGroups.map(
          (
            taskGroup: TaskGroupClientState,
            taskGroupIndex: React.Key | null | undefined
          ) => (
            <TaskCardGroup key={taskGroupIndex}>
              {!taskGroup.EditTaskGroup ? (
                <TaskCardGroupHeader
                  onClick={() =>
                    workspaceDispatch({
                      type: CHANGE_TASK_GROUP,
                      payload: { taskGroupIndex: taskGroupIndex },
                    })
                  }>
                  {taskGroup.Name}
                </TaskCardGroupHeader>
              ) : (
                <EditTaskGroup taskGroupIndex={taskGroupIndex} />
              )}
              {taskGroup
                ? taskGroup?.Tasks?.map(
                    (
                      task: TaskClientState,
                      taskIndex: React.Key | null | undefined
                    ) => (
                      <div key={taskIndex}>
                        {!task.EditTask ? (
                          <TaskCardComponent
                            taskGroupIndex={taskGroupIndex}
                            taskIndex={taskIndex}
                            task={task}
                          />
                        ) : (
                          <EditTask
                            task={task}
                            taskGroupIndex={taskGroupIndex}
                            taskIndex={taskIndex}
                          />
                        )}
                      </div>
                    )
                  )
                : ''}
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
          <CreateTaskGroup />
        ) : (
          <TaskCardGroupAddComponent />
        )}
      </TaskGroups>
    </>
  );
};

export default TaskCardGroupComponent;
