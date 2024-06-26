export enum componentFragments {
  button = 'button',
  checkbox = 'checkbox',
  color = 'color',
  date = 'date',
  datetime_local = 'datetime-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
  week = 'week',
  select = 'select',
  textarea = 'textarea',
  table = 'table',
  container = 'container',
}

export interface inputProps {
  title?: string;
  type?: componentFragments;
  description?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  enableMarkdownInDescription?: boolean;
}