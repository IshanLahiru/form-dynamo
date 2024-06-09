import React from 'react';

interface NumberFieldProps {
  id: string;
  name: string;
  title: string;
  formData: number | string;
  onChange: (value: number | string) => void;
  error: string;
}

export default function NumberField(props: NumberFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      props.onChange(Number(value));
    } else {
      props.onChange(value);
    }
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type="number"
        id={props.id}
        name={props.name}
        value={props.formData}
        onChange={handleChange}
        required
      />
      {props.error && <div>{props.error}</div>}
    </div>
  );
}
