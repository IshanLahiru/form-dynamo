import React from 'react';
import { Form, Input } from 'antd';

 export interface BaseFieldProps {
  id: string;
  name: string;
  title: string;
  formData: string;
  onChange: (value: string) => void;
  error: string;
}

const BaseField: React.FC<BaseFieldProps> = ({
  id,
  name,
  title,
  formData,
  onChange,
  error,
}) => {
  return (
    <Form.Item
      label={title}
      validateStatus={error ? 'error' : ''}
      help={error}
    >
      <Input id={id} defaultValue={formData}/>
    </Form.Item>
  );
};

export default BaseField;
