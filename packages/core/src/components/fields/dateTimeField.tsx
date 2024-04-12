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
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type="datetime-local"
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
