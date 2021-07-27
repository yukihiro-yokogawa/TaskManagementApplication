import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  EDIT_TASK,
  WorkspaceDispatchContext,
} from '../../context/workspace/workspace';
import { ButtonPrimary, CloseButton } from '../../styles/button';
import {
  TaskGroupFooter,
  CreateTaskCard,
  CreateTaskTextArea,
} from '../../styles/taskCard';

/**
 * タスクカードを編集するためのフォームをタスクグループ内に表示するためのコンポーネント.
 *
 * @param {{
 *   title: string; タスクカードのタイトル
 *   onSubmit: (data: any) => void; フォーム送信を許可する際のロジック
 * }} props
 * @return {*}
 */
const EditTaskComponent = (props: {
  title: string;
  taskGroupIndex: React.Key | null | undefined;
  taskIndex: React.Key | null | undefined;
  onSubmit: (data: any) => void;
}) => {
  const { title, onSubmit } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: { Title: title },
  });
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <CreateTaskCard onSubmit={handleSubmit(onSubmit)}>
      <CreateTaskTextArea {...register('Title')} />
      <TaskGroupFooter>
        <ButtonPrimary>登録</ButtonPrimary>
        <CloseButton
          type="button"
          onClick={() =>
            dispatch({
              type: EDIT_TASK,
              payload: {
                taskGroupIndex: props.taskGroupIndex,
                taskIndex: props.taskIndex,
              },
            })
          }>
          ×
        </CloseButton>
      </TaskGroupFooter>
    </CreateTaskCard>
  );
};

export default EditTaskComponent;
