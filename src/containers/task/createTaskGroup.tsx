import React, { useContext } from 'react';
import CreateTaskGroupComponent from '../../components/task/createTaskGroup';
import {
  PUSH_TASK_GROUP,
  WorkspaceContext,
  WorkspaceDispatchContext,
} from '../../context/workspace/workspace';
import { TaskGroupState } from '../../types/taskGroup';
import { apiVersion } from '../../utils/api';
import axiosInstance from '../../utils/axiosInstance';

const CreateTaskGroup = () => {
  const workspace = useContext(WorkspaceContext);
  const dispatch = useContext(WorkspaceDispatchContext);
  const handleSubmit = (taskGroup: TaskGroupState) => {
    taskGroup.WorkspaceId = workspace.WorkspaceId;
    axiosInstance
      .post(`/${apiVersion}/api/taskGroup/post`, {
        params: { data: taskGroup },
      })
      .then((res) => {
        dispatch({
          type: PUSH_TASK_GROUP,
          payload: {
            taskGroup: res.data,
          },
        });
      });
  };
  return (
    <>
      <CreateTaskGroupComponent onSubmit={handleSubmit} />
    </>
  );
};

export default CreateTaskGroup;
