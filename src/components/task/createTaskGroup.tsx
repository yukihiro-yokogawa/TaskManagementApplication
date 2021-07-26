import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { HIDDEN_ACTION } from '../../context/workspace/createWorkspaceModal';
import {
  CANCEL_CREATE_TASK_GROUP,
  WorkspaceDispatchContext,
} from '../../context/workspace/workspace';
import { ButtonPrimary, CloseButton } from '../../styles/button';
import {
  CreateTaskGroup,
  CreateTaskGroupTextArea,
  TaskGroupFooter,
} from '../../styles/taskCard';

const CreateTaskGroupComponent = (props: { onSubmit: (data: any) => void }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useContext(WorkspaceDispatchContext);
  return (
    <CreateTaskGroup onSubmit={handleSubmit(props.onSubmit)}>
      <CreateTaskGroupTextArea {...register('Title')} />
      <TaskGroupFooter>
        <ButtonPrimary>登録</ButtonPrimary>
        <CloseButton
          type="button"
          onClick={() =>
            dispatch({ type: CANCEL_CREATE_TASK_GROUP, payload: '' })
          }>
          ×
        </CloseButton>
      </TaskGroupFooter>
    </CreateTaskGroup>
  );
};

export default CreateTaskGroupComponent;
