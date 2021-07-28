import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  CANCEL_CREATE_TASK,
  WorkspaceDispatchContext,
} from '~/context/workspace/workspace';
import { ButtonPrimary, CloseButton } from '~/styles/button';
import { FlexBox } from '~/styles/main';
import { CreateTaskCard, CreateTaskTextArea } from '~/styles/taskCard';

/**
 * タスクカードを登録するためのフォームをタスクグループ内に表示するためのコンポーネント.
 *
 * @param {({
 *   taskGroupIndex: React.Key | null | undefined;
 *   onSubmit: (data: any) => void;
 * })} props
 * @return {*}
 */
const CreateTaskComponent = (props: {
  taskGroupIndex: React.Key | null | undefined;
  onSubmit: (data: any) => void;
}) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <CreateTaskCard onSubmit={handleSubmit(props.onSubmit)} zIndex={'0'}>
      <CreateTaskTextArea {...register('Title')} />
      <FlexBox justifyContent="space-between" alignItems="center">
        <ButtonPrimary>登録</ButtonPrimary>
        <CloseButton
          type="button"
          onClick={() =>
            dispatch({
              type: CANCEL_CREATE_TASK,
              payload: {
                taskGroupIndex: props.taskGroupIndex,
              },
            })
          }>
          ×
        </CloseButton>
      </FlexBox>
    </CreateTaskCard>
  );
};

export default CreateTaskComponent;
