import React, { useContext } from 'react';
import CreateTaskComponent from '../../components/task/createTask';
import { KeycloakContext } from '../../context/keycloak';
import {
  WorkspaceDispatchContext,
  PUSH_TASK,
} from '../../context/workspace/workspace';
import { TaskState } from '../../types/task';
import { apiVersion } from '../../utils/api';
import axiosInstance from '../../utils/axiosInstance';

const CreateTask = (props: {
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
          type: PUSH_TASK,
          payload: { taskGroupIndex: props.index, task: res.data },
        });
      });
  };
  return <CreateTaskComponent index={props.index} onSubmit={handleSubmit} />;
};

export default CreateTask;
