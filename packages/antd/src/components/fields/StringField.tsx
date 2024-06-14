import React from 'react';
interface StringFieldProps {
  id: string;
  name: string;
  title: string;
  formData: string;
  onChange: (value: string) => void;
  error: string;
}
export default function StringFields(props: StringFieldProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        value={props.formData}
        onChange={(e) => props.onChange(e.target.value)}
        required
      />
      {props.error && <div>{props.error}</div>}
    </div>
  );
}
