import React from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import {
  TextBoxArea,
  TextArea,
  TextBoxAreaLabel,
  TextBoxLabelError,
} from '../../styles/form';
import { TextBoxState } from '../../types/form';

/**
 * テキストエリアを表示するコンポーネント.
 *
 * @param {TextBoxState} props
 * @return {*}
 */
const TextAreaComponent = (props: TextBoxState) => {
  const { Label, Name } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const value = useWatch({
    control,
    name: Name,
  });
  return (
    <TextBoxArea value={(value as unknown as string) ? true : false}>
      <Controller
        render={({ field }) => <TextArea {...field} />}
        name={Name}
        control={control}
        defaultValue=""
      />
      <TextBoxAreaLabel>{Label}</TextBoxAreaLabel>
      <TextBoxLabelError>
        {errors[Name] && 'This field is required'}
      </TextBoxLabelError>
    </TextBoxArea>
  );
};
export default TextAreaComponent;
