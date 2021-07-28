import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import EditTaskSideBarComponent from '~/components/task/edit/editTaskSideBar';
import { EditTaskContext } from '~/context/task/task';
import {
  EDIT_TASK,
  WorkspaceDispatchContext,
} from '~/context/workspace/workspace';
import { ButtonPrimary, CloseButton } from '~/styles/button';
import { FlexBox } from '~/styles/main';
import {
  CreateTaskCard,
  CreateTaskTextArea,
  TaskOverlay,
} from '~/styles/taskCard';

/**
 * タスクカードを編集するためのフォームをタスクグループ内に表示するためのコンポーネント.
 *
 * @param {{
 *   title: string; タスクカードのタイトル
 *   onSubmit: (data: any) => void; フォーム送信を許可する際のロジック
 * }} props
 * @return {*}
 */
const EditTaskComponent = (props: { onSubmit: (data: any) => void }) => {
  const editTask = useContext(EditTaskContext);
  const { onSubmit } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: { Title: editTask.task.Title },
  });
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <>
      <TaskOverlay
        onClick={() =>
          dispatch({
            type: EDIT_TASK,
            payload: {
              taskGroupIndex: editTask.taskGroupIndex,
              taskIndex: editTask.taskIndex,
            },
          })
        }
      />
      <EditTaskSideBarComponent />
      <CreateTaskCard onSubmit={handleSubmit(onSubmit)} zIndex={'10'}>
        <CreateTaskTextArea {...register('Title')} />
        <FlexBox justifyContent="space-between" alignItems="center">
          <ButtonPrimary>登録</ButtonPrimary>
          <CloseButton
            type="button"
            onClick={() =>
              dispatch({
                type: EDIT_TASK,
                payload: {
                  taskGroupIndex: editTask.taskGroupIndex,
                  taskIndex: editTask.taskIndex,
                },
              })
            }>
            ×
          </CloseButton>
        </FlexBox>
      </CreateTaskCard>
    </>
  );
};

export default EditTaskComponent;
