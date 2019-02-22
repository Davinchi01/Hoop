import React from 'react'
import PropType from "prop-types";
import {Form} from "react-bootstrap";

import FieldFormGroup from "../FieldFormGroup/index";
import When from "../When/index";
import {ErrorContainer, ErrorText, FormControl} from "../FormField/style";

const SelectField = (props) => {
  const {field: {value, name}, form: {errors, touched}} = props
  const error = !!errors[name] && !!touched[name]
  console.log(props);
  return (
    <>
      <FieldFormGroup {...props}>
        <Form.Control as="select" {...props.field} {...props}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        <ErrorContainer>
          <When is={error}>
            <ErrorText error={error}>{errors[name]}</ErrorText>
          </When>
        </ErrorContainer>
      </FieldFormGroup>
    </>
  )
};

SelectField.propTypes = {
  label: PropType.string,
  field: PropType.object.isRequired,
  form: PropType.object.isRequired,
  narrow: PropType.bool,
  required: PropType.bool,
}

export default SelectField
