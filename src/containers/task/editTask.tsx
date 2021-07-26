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
      .post(`/${apiVersion}/api/task/post`, {
        params: { data: editTask },
      })
      .then((res) => {
        dispatch({
          type: EDIT_TASK,
          payload: {
            taskGroupIndex: taskGroupIndex,
            taskIndex: taskIndex,
            task: res.data,
          },
        });
      });
  };

  return <EditTaskComponent title={editTask.Title} onSubmit={handleSubmit} />;
};

export default EditTask;
