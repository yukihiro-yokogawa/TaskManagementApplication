import React, { useContext } from 'react';
import EditTaskGroupComponent from '~/components/task/edit/editTaskGroup';
import {
  EDIT_TASK_GROUP,
  WorkspaceContext,
  WorkspaceDispatchContext,
} from '~/context/workspace/workspace';
import { TaskGroupState } from '~/types/taskGroup';
import { apiVersion } from '~/utils/api';
import axiosInstance from '~/utils/axiosInstance';

/**
 * タスクグループを更新するためのデータ取得、登録処理等のロジックを担うコンポーネント（Container Component）です.
 *
 * @param {({
 *   taskGroupIndex: React.Key | null | undefined; タスクグループの配列番号
 * })} props
 * @return {*}
 */
const EditTaskGroup = (props: {
  taskGroupIndex: React.Key | null | undefined;
}) => {
  const { taskGroupIndex } = props;
  const workspace = useContext(WorkspaceContext);
  const dispatch = useContext(WorkspaceDispatchContext);
  const editTaskGroup = workspace.TaskGroups[Number(taskGroupIndex)];
  const handleSubmit = (taskGroup: TaskGroupState) => {
    editTaskGroup.Name = taskGroup.Name;
    axiosInstance
      .put(`/${apiVersion}/api/taskGroup/put`, {
        params: { data: editTaskGroup },
      })
      .then(() => {
        dispatch({
          type: EDIT_TASK_GROUP,
          payload: {
            taskGroupIndex: taskGroupIndex,
          },
        });
      });
  };
  return (
    <EditTaskGroupComponent
      name={editTaskGroup.Name}
      taskGroupIndex={props.taskGroupIndex}
      onSubmit={handleSubmit}
    />
  );
};

export default EditTaskGroup;
