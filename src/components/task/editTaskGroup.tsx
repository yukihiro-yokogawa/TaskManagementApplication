import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  EDIT_TASK_GROUP,
  WorkspaceDispatchContext,
} from '../../context/workspace/workspace';
import { ButtonPrimary, CloseButton } from '../../styles/button';
import {
  CreateTaskGroup,
  CreateTaskGroupTextArea,
  TaskGroupFooter,
} from '../../styles/taskCard';

/**
 * タスクグループを編集するためのフォームをタスクグループ内に表示するためのコンポーネント
 *
 * @param {({
 *   name: string; タスクグループのタイトル
 *   taskGroupIndex: React.Key | null | undefined; タスクグループの配列番号
 *   onSubmit: (data: any) => void; フォーム送信を許可する際のロジック
 * })} props
 * @return {*}
 */
const EditTaskGroupComponent = (props: {
  name: string;
  taskGroupIndex: React.Key | null | undefined;
  onSubmit: (data: any) => void;
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { Name: props.name },
  });
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <CreateTaskGroup onSubmit={handleSubmit(props.onSubmit)}>
      <CreateTaskGroupTextArea {...register('Name')} />
      <TaskGroupFooter>
        <ButtonPrimary>登録</ButtonPrimary>
        <CloseButton
          type="button"
          onClick={() =>
            dispatch({
              type: EDIT_TASK_GROUP,
              payload: { taskGroupIndex: props.taskGroupIndex },
            })
          }>
          ×
        </CloseButton>
      </TaskGroupFooter>
    </CreateTaskGroup>
  );
};

export default EditTaskGroupComponent;
