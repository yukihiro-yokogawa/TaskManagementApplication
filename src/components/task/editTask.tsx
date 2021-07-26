import React from 'react';
import { useForm } from 'react-hook-form';
import { ButtonPrimary } from '../../styles/button';
import { CreateTaskCard, CreateTaskTextArea } from '../../styles/taskCard';

/**
 * タスクカードを編集するためのフォームをタスクグループ内に表示するためのコンポーネント.
 *
 * @param {{
 *   title: string;
 *   onSubmit: (data: any) => void;
 * }} props
 * @return {*}
 */
const EditTaskComponent = (props: {
  title: string;
  onSubmit: (data: any) => void;
}) => {
  const { title, onSubmit } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: { Title: title },
  });
  return (
    <CreateTaskCard onSubmit={handleSubmit(onSubmit)}>
      <CreateTaskTextArea {...register('Title')} />
      <ButtonPrimary>登録</ButtonPrimary>
    </CreateTaskCard>
  );
};

export default EditTaskComponent;
