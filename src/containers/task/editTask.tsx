import { useContext } from 'react';
import EditTaskComponent from '../../components/task/editTask';
import { KeycloakContext } from '../../context/keycloak';
import {
  WorkspaceDispatchContext,
  PUSH_TASK,
  EDIT_TASK,
} from '../../context/workspace/workspace';
import { TaskState } from '../../types/task';
import { apiVersion } from '../../utils/api';
import axiosInstance from '../../utils/axiosInstance';

const EditTask = (props: {
  index: React.Key | null | undefined;
  taskGroupId: string;
}) => {
  const keycloak = useContext(KeycloakContext);
  const dispatch = useContext(WorkspaceDispatchContext);
  const handleSubmit = (task: TaskState) => {
    task.ChargeUsers = [
      {
        ChargeUserId: '',
        UserId: keycloak.UserId,
        TaskId: '',
      },
    ];
    task.TaskGroupId = String(props.taskGroupId);
    axiosInstance
      .post(`/${apiVersion}/api/task/post`, {
        params: { data: task },
      })
      .then((res) => {
        dispatch({
          type: EDIT_TASK,
          payload: { taskGroupIndex: props.index, task: res.data },
        });
      });
  };

  return <EditTaskComponent index={props.index} onSubmit={handleSubmit} />;
};

export default EditTask;
