import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ButtonPrimary } from '../../styles/button';
import { Form } from '../../styles/form';
import { CreateWorkspaceState } from '../../types/createWorkspace';
import TextBoxComponent from '../element/textBox';
import TextAreaComponent from '../element/textArea';

/**
 * Workspace作成時に使用するForm部分のコンポーネント.
 *
 * @param {CreateWorkspaceState} props
 * @return {*}
 */
const CreateWorkspaceComponent = (props: CreateWorkspaceState) => {
  const { onSubmit } = props;
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <div>
            <TextBoxComponent Label="workspace" Name="title" />
          </div>
          <div>
            <TextAreaComponent Label="description" Name="description" />
          </div>
        </div>
        <ButtonPrimary type="submit">ワークスペースを作成</ButtonPrimary>
      </Form>
    </FormProvider>
  );
};

export default CreateWorkspaceComponent;
