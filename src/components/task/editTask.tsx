import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import EditTaskSideBar from '../../containers/task/editTaskSideBar';
import {
  EDIT_TASK,
  WorkspaceDispatchContext,
} from '../../context/workspace/workspace';
import { ButtonPrimary, CloseButton } from '../../styles/button';
import {
  TaskGroupFooter,
  CreateTaskCard,
  CreateTaskTextArea,
  TaskOverlay,
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
  const { title, taskGroupIndex, taskIndex, onSubmit } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: { Title: title },
  });
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <CreateTaskCard onSubmit={handleSubmit(onSubmit)} zIndex={'10'}>
      <TaskOverlay
        onClick={() =>
          dispatch({
            type: EDIT_TASK,
            payload: {
              taskGroupIndex: taskGroupIndex,
              taskIndex: taskIndex,
            },
          })
        }
      />
      <EditTaskSideBar />
      <CreateTaskTextArea {...register('Title')} />
      <TaskGroupFooter>
        <ButtonPrimary>登録</ButtonPrimary>
        <CloseButton
          type="button"
          onClick={() =>
            dispatch({
              type: EDIT_TASK,
              payload: {
                taskGroupIndex: taskGroupIndex,
                taskIndex: taskIndex,
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
