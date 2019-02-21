import React from 'react'
import PropType from "prop-types";

import FieldFormGroup from "../FieldFormGroup/index";
import When from "../When/index";
import {ErrorContainer, ErrorText, FormControl} from "./style";

const FormField = (props) => {
  const {field: {value, name}, form: {errors, touched}} = props
  const error = !!errors[name] && !!touched[name]
  return (
    <>
      <FieldFormGroup {...props}>
        <FormControl type="text" {...props.field} {...props} />
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
  label: PropType.string.isRequired,
  field: PropType.object.isRequired,
  form: PropType.object.isRequired,
  narrow: PropType.bool,
  required: PropType.bool,
}

export default FormField
