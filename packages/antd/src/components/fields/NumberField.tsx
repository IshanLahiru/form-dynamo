import React from 'react';
import { InputNumber, Form } from 'antd';

export interface NumberFieldProps {
  id: string;
  name: string;
  title: string;
  formData: number | string;
  onChange: (value: number | string) => void;
  error: string;
}

const NumberField: React.FC<NumberFieldProps> = ({
  id,
  name,
  title,
  formData,
  onChange,
  error,
}) => {
  const handleChange = (value: number | string | null) => {
    if (value !== null) {
      onChange(value);
    }
  };

  return (
    <Form.Item
      label={title}
      validateStatus={error ? 'error' : ''}
      help={error}
    >
      <InputNumber
        id={id}
        name={name}
        value={typeof formData === 'number' ? formData : Number(formData)}
        onChange={handleChange}
      />
    </Form.Item>
  );
};

export default NumberField;
