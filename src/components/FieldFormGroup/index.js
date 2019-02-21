import React from 'react';
import PropType from 'prop-types'
import {Col, FormGroup, Row} from "react-bootstrap";
import styled from 'styled-components'

import {labelColor, labelColorSecondary} from "../../constants";
import When from "../When";

const FormLabelStyled = styled(FormGroup)`
  font-weight: bold;
  font-size: 14px;
  color: ${labelColor}
`

const OptionalField = styled.span`
  color: ${labelColorSecondary};
  font-size: 14px;
`

const RowStyled = styled(Row)`
  justify-content: space-between;
  height: 27px;
`

const FieldFormGroup = ({label, required, narrow, children,}) => (
  <FormGroup style={{marginBottom: 15}}>
    <Col md={narrow ? 6 : 12}>
      <RowStyled>
        <FormLabelStyled>{label}</FormLabelStyled>
        <When is={!required}>
          <OptionalField>optional</OptionalField>
        </When>
      </RowStyled>
      <Row>
        {children}
      </Row>
    </Col>
  </FormGroup>
);

FieldFormGroup.propTypes = {
  label: PropType.string.isRequired,
  field: PropType.object.isRequired,
  form: PropType.object.isRequired,
  narrow: PropType.bool,
  required: PropType.bool,
}

export default FieldFormGroup;
