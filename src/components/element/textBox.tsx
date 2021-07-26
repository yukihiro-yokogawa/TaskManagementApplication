import React from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import {
  TextBoxInput,
  Input,
  TextBoxInputLabel,
  TextBoxLabelError,
} from '../../styles/form';
import { TextBoxState } from '../../types/form';

/**
 * テキストボックスを表示するコンポーネント
 *
 * @param {TextBoxState} props
 * @return {*}
 */
const TextBoxComponent = (props: TextBoxState) => {
  const { Name, Label } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const value = useWatch({
    control,
    name: Name,
  });
  return (
    <TextBoxInput value={(value as unknown as string) ? true : false}>
      <Controller
        render={({ field }) => <Input {...field} />}
        name={Name}
        control={control}
        defaultValue=""
      />
      <TextBoxInputLabel>{Label}</TextBoxInputLabel>
      <TextBoxLabelError>
        {errors[Name] && 'This field is required'}
      </TextBoxLabelError>
    </TextBoxInput>
  );
};
export default TextBoxComponent;
