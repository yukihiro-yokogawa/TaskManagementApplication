import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  CANCEL_CREATE_TASK_GROUP,
  WorkspaceDispatchContext,
} from '~/context/workspace/workspace';
import { ButtonPrimary, CloseButton } from '~/styles/button';
import { FlexBox } from '~/styles/main';
import { CreateTaskGroup, CreateTaskGroupTextArea } from '~/styles/taskCard';

/**
 * タスクグループを登録するためのフォームをタスクグループ内に表示するためのコンポーネント.
 *
 * @param {{ onSubmit: (data: any) => void }} props
 * @return {*}
 */
const CreateTaskGroupComponent = (props: { onSubmit: (data: any) => void }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <CreateTaskGroup onSubmit={handleSubmit(props.onSubmit)}>
      <CreateTaskGroupTextArea {...register('Name')} />
      <FlexBox justifyContent="space-between" alignItems="center">
        <ButtonPrimary>登録</ButtonPrimary>
        <CloseButton
          type="button"
          onClick={() =>
            dispatch({ type: CANCEL_CREATE_TASK_GROUP, payload: '' })
          }>
          ×
        </CloseButton>
      </FlexBox>
    </CreateTaskGroup>
  );
};

export default CreateTaskGroupComponent;
