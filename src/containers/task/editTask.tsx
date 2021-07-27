import { useContext } from 'react';
import EditTaskComponent from '../../components/task/editTask';
import { KeycloakContext } from '../../context/keycloak';
import {
  WorkspaceDispatchContext,
  EDIT_TASK,
  WorkspaceContext,
} from '../../context/workspace/workspace';
import { TaskState } from '../../types/task';
import { apiVersion } from '../../utils/api';
import axiosInstance from '../../utils/axiosInstance';

/**
 * タスクを更新するためのデータ取得、登録処理等のロジックを担うコンポーネント（Container Component）です.
 *
 * @param {({
 *   taskGroupIndex: React.Key | null | undefined; タスクグループの配列番号
 *   taskIndex: React.Key | null | undefined; タスクの配列番号
 * })} props
 * @return {*}
 */
const EditTask = (props: {
  taskGroupIndex: React.Key | null | undefined;
  taskIndex: React.Key | null | undefined;
}) => {
  const { taskGroupIndex, taskIndex } = props;
  const workspace = useContext(WorkspaceContext);
  const dispatch = useContext(WorkspaceDispatchContext);
  const editTask =
    workspace.TaskGroups[Number(taskGroupIndex)].Tasks[Number(taskIndex)];
  const handleSubmit = (task: TaskState) => {
    editTask.Title = task.Title;
    axiosInstance
      .put(`/${apiVersion}/api/task/put`, {
        params: { data: editTask },
      })
      .then(() => {
        dispatch({
          type: EDIT_TASK,
          payload: {
            taskGroupIndex: taskGroupIndex,
            taskIndex: taskIndex,
          },
        });
      });
  };

  return <EditTaskComponent title={editTask.Title} onSubmit={handleSubmit} />;
};

export default EditTask;
