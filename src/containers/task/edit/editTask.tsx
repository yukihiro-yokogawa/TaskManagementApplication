import { useContext, useReducer } from 'react';
import EditTaskComponent from '~/components/task/edit/editTask';
import {
  EditTaskContext,
  EditTaskDispatchContext,
  EditTaskReducer,
} from '~/context/task/task';
import {
  WorkspaceDispatchContext,
  EDIT_TASK,
  WorkspaceContext,
} from '~/context/workspace/workspace';
import task from '~/pages/task';
import { editTaskInitialState, TaskClientState, TaskState } from '~/types/task';
import { apiVersion } from '~/utils/api';
import axiosInstance from '~/utils/axiosInstance';

/**
 * タスクを更新するためのデータ取得、登録処理等のロジックを担うコンポーネント（Container Component）です.
 *
 * @return {*}
 */
const EditTask = (props: {
  task: TaskClientState;
  taskGroupIndex: React.Key;
  taskIndex: React.Key;
}) => {
  const workspaceDispatch = useContext(WorkspaceDispatchContext);
  const [editTask, editTaskDispatch] = useReducer(EditTaskReducer, {
    ...editTaskInitialState,
    task: props.task,
    taskGroupIndex: Number(props.taskGroupIndex),
    taskIndex: Number(props.taskIndex),
  });
  const handleSubmit = (task: TaskState) => {
    editTask.task.Title = task.Title;
    console.log(editTask.task);
    axiosInstance
      .put(`/${apiVersion}/api/task/put`, {
        params: { data: editTask.task },
      })
      .then(() => {
        workspaceDispatch({
          type: EDIT_TASK,
          payload: {
            taskGroupIndex: editTask.taskGroupIndex,
            taskIndex: editTask.taskIndex,
          },
        });
      });
  };

  return (
    <EditTaskContext.Provider value={editTask}>
      <EditTaskDispatchContext.Provider value={editTaskDispatch}>
        <EditTaskComponent onSubmit={handleSubmit} />
      </EditTaskDispatchContext.Provider>
    </EditTaskContext.Provider>
  );
};

export default EditTask;
