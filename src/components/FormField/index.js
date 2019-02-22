import React from 'react'
import PropType from "prop-types";

import FieldFormGroup from "../FieldFormGroup/index";
import When from "../When/index";
import {ErrorContainer, ErrorText, FormControl} from "./style";

const FormField = (props) => {
  const {
    field: {value, name, onBlur, onChange},
    form: {errors, touched},
    type, as, placeholder} = props
  const error = !!errors[name] && !!touched[name]
  return (
    <>
      <FieldFormGroup {...props}>
        <FormControl
          type={type}
          as={as}
          placeholder={placeholder}
          {...props.field}
        >{props.children && props.children}</FormControl>
        <ErrorContainer>
          <When is={error}>
            <ErrorText error={error}>{errors[name]}</ErrorText>
          </When>
        </ErrorContainer>
      </FieldFormGroup>
    </>
  )
};

FormField.propTypes = {
  label: PropType.string,
  field: PropType.object.isRequired,
  form: PropType.object.isRequired,
  narrow: PropType.bool,
  required: PropType.bool,
}

export default FormField
