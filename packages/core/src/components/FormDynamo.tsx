import { useEffect, useState } from 'react';

export interface FormProps {
  Schema?: Record<string, unknown>;
  formData?: Record<string, unknown>;
  readonly?: boolean;
}

export default function Form(props: FormProps) {
  const [fieldArray, setFieldArray] = useState<Record<string, unknown>[]>([]);

  return (
    <div className='container'>
      {fieldArray.map((field) => {
        return (
          <div/>
        );
      })}
    </div>
  );
}
