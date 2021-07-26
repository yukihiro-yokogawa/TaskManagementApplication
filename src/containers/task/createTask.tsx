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

/**
 * タスクを登録するためのデータ取得、登録処理等のロジックを担うコンポーネント（Container Component）です.
 *
 * @param {({
 *   taskGroupIndex: React.Key | null | undefined; タスクグループの配列番号
 *   taskGroupId: string; タスクグループのID
 * })} props
 * @return {*}
 */
const CreateTask = (props: {
  taskGroupIndex: React.Key | null | undefined;
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
    task.TaskGroupId = props.taskGroupId;
    axiosInstance
      .post(`/${apiVersion}/api/task/post`, {
        params: { data: task },
      })
      .then((res) => {
        dispatch({
          type: PUSH_TASK,
          payload: { taskGroupIndex: props.taskGroupIndex, task: res.data },
        });
      });
  };
  return (
    <CreateTaskComponent index={props.taskGroupIndex} onSubmit={handleSubmit} />
  );
};

export default CreateTask;
