import React from 'react';
import { useForm } from 'react-hook-form';
import { ButtonPrimary } from '../../styles/button';
import { CreateTaskCard, CreateTaskTextArea } from '../../styles/taskCard';

const EditTaskComponent = (props: {
  index: React.Key | null | undefined;
  onSubmit: (data: any) => void;
}) => {
  const { register, handleSubmit } = useForm();
  return (
    <CreateTaskCard onSubmit={handleSubmit(props.onSubmit)}>
      <CreateTaskTextArea {...register('Title')} />
      <ButtonPrimary>登録</ButtonPrimary>
    </CreateTaskCard>
  );
};

export default EditTaskComponent;
