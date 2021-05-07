import React from 'react';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ParagraphError, ValidationIcon, Label } from './styles';
import '../../styles/pages/AvailabilityForm.scss';

export default function TextArea({
  state,
  setState,
  inputType,
  inputName,
  labelName,
  placeholder,
  errorMessage,
  regularExpression,
}) {
  const textAreahandleChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const textAreaHandlerValidation = () => {
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
        <textarea
          className="textarea"
          rows="3"
          type={inputType}
          id={inputName}
          placeholder={placeholder}
          value={state.field}
          onChange={textAreahandleChange}
          onKeyUp={textAreaHandlerValidation}
          onBlur={textAreaHandlerValidation}
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
