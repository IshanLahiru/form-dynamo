import { componentFragments, inputProps} from '../converters/schema-to-field-array-converter/Fragments';

const SwitchComponent = (fragmentType:inputProps) => {
  const renderInputComponent = () => {
    switch (fragmentType.type) {
      case componentFragments.button:
        return new Error('Button is not supported yat');
      case componentFragments.checkbox:
        return new Error('Checkbox is not supported yat');
      case componentFragments.color:
        return new Error('Checkbox is not supported yat');
      case componentFragments.date:
        return new Error('Checkbox is not supported yat');
      case componentFragments.datetime_local:
        return new Error('Checkbox is not supported yat');
      case componentFragments.email:
        return new Error('Checkbox is not supported yat');
      case componentFragments.file:
        return new Error('Checkbox is not supported yat');
      case componentFragments.hidden:
        return new Error('Checkbox is not supported yat');
      case componentFragments.image:
        return new Error('Checkbox is not supported yat');
      case componentFragments.month:
        return new Error('Checkbox is not supported yat');
      case componentFragments.number:
        return new Error('Checkbox is not supported yat');
      case componentFragments.password:
        return new Error('Checkbox is not supported yat');
      case componentFragments.radio:
        return new Error('Checkbox is not supported yat');
      case componentFragments.range:
        return new Error('Checkbox is not supported yat');
      case componentFragments.reset:
        return new Error('Checkbox is not supported yat');
      case componentFragments.search:
        return new Error('Checkbox is not supported yat');
      case componentFragments.submit:
        return new Error('Checkbox is not supported yat');
      case componentFragments.tel:
        return new Error('Checkbox is not supported yat');
      case componentFragments.text:
        return new Error('Checkbox is not supported yat');
      case componentFragments.time:
        return new Error('Checkbox is not supported yat');
      case componentFragments.url:
        return new Error('Checkbox is not supported yat');
      case componentFragments.week:
        return new Error('Checkbox is not supported yat');
      case componentFragments.select:
        return new Error('Checkbox is not supported yat');
      case componentFragments.textarea:
        return new Error('Checkbox is not supported yat');
      case componentFragments.table:
        return new Error('Checkbox is not supported yat');
      case componentFragments.container:
        return new Error('Checkbox is not supported yat');
      default:
        return new Error('Invalid fragment type');
    }
  };

  return renderInputComponent();
};

export default SwitchComponent;
