import React from 'react';
<<<<<<< Updated upstream
=======
import { Input, Form } from 'antd';

>>>>>>> Stashed changes
interface StringFieldProps {
  id: string;
  name: string;
  title: string;
  formData: string;
  onChange: (value: string) => void;
  error: string;
}

const StringField: React.FC<StringFieldProps> = ({
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
      <Input
        type="text"
        id={id}
        name={name}
        value={formData}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Form.Item>
  );
};

export default StringField;
