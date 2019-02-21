import React from 'react';
import PropType from 'prop-types'
import {FormGroup, FormLabel, Row} from "react-bootstrap";
import CustomFormControl from "../FormField/index";

const FieldFormGroup = ({label, isRequired, isNarrow, name, ...rest}) => (
  <FormGroup controlId={`form-horizontal-${name}`}>
    <Row>
      <FormLabel>{label}</FormLabel>
      {<span>optional</span>}
    </Row>
    <CustomFormControl
      {...rest}
    />
  </FormGroup>
);

FieldFormGroup.propTypes = {
  label: PropType.string,
  isRequired: PropType.bool,
}

export default FieldFormGroup;
