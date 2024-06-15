import React from 'react';
import { DatePicker, Form } from 'antd';
import moment from 'moment';

interface DateTimeFieldProps {
  id: string;
  name: string;
  title: string;
  formData: string;
  onChange: (value: string) => void;
  error: string;
}

const DateTimeField: React.FC<DateTimeFieldProps> = ({
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
      <DatePicker
        id={id}
        name={name}
        value={formData ? moment(formData) : null}
        onChange={(value) =>
          onChange(value ? value.format('YYYY-MM-DDTHH:mm') : '')
        }
        showTime
      />
    </Form.Item>
  );
};

export default DateTimeField;
