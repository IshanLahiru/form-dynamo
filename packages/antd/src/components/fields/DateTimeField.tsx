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

export default function DateTimeField(props: DateTimeFieldProps) {
  return (
    <Form.Item
      label={props.title}
      validateStatus={props.error ? 'error' : ''}
      help={props.error}
    >
      <DatePicker
        id={props.id}
        name={props.name}
        value={props.formData ? moment(props.formData) : null}
        onChange={(value) => props.onChange(value ? value.format('YYYY-MM-DDTHH:mm') : '')}
        showTime
      />
    </Form.Item>
  );
}
