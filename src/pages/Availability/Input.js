import React from 'react';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ParagraphError, ValidationIcon, Label, Input } from './styles';
import '../../styles/pages/AvailabilityForm.scss';

export default function InputComponent({
  state,
  setState,
  inputType,
  inputName,
  labelName,
  placeholder,
  errorMessage,
  regularExpression,
  row,
}) {
  const handleChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const inputHandlerValidation = () => {
    if (regularExpression) {
      if (regularExpression.test(state.field)) {
        setState({ ...state, isValid: 'true' });
      } else {
        setState({ ...state, isValid: 'false' });
      }
    }
  };

  return (
    <div className="control-group">
      <div className="form-control">
        <Label htmlFor={inputName} isValid={state.isValid}>
          {labelName}
        </Label>
        <Input
          type={inputType}
          id={inputName}
          placeholder={placeholder}
          value={state.field}
          onChange={handleChange}
          onKeyUp={inputHandlerValidation}
          onBlur={inputHandlerValidation}
          isValid={state.isValid}
        />
        <ValidationIcon
          icon={state.isValid === 'true' ? faCheckCircle : faTimesCircle}
          isValid={state.isValid}
        />
      </div>
      <ParagraphError isValid={state.isValid}>{errorMessage}</ParagraphError>
    </div>
  );
}
