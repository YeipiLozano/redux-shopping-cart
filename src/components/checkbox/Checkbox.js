import {Label, CheckboxInput} from './Checkbox.styles';

const Checkbox = ({label, value, onChange}) => {
  return (
    <Label>
      <CheckboxInput type='checkbox' checked={value} onChange={onChange} />
      {label}
    </Label>
  );
};
export default Checkbox;
