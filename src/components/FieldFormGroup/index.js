import React from 'react';
import PropType from 'prop-types'
import {Col, Form, Row} from "react-bootstrap";
import styled from 'styled-components'

import {labelColor, labelColorSecondary} from "../../constants";
import When from "../When";

const FormLabelStyled = styled(Form.Label)`
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

const FieldFormGroup = ({label, required, narrow, children, col}) => (
  <Form.Group as={Col} {...col} style={{marginBottom: 15}}>
    <Col>
      {label &&
      <RowStyled>
        <FormLabelStyled>{label}</FormLabelStyled>
        <When is={!required}>
          <OptionalField>optional</OptionalField>
        </When>
      </RowStyled>}
      <Row >
        {children}
      </Row>
    </Col>
  </Form.Group>
);

FieldFormGroup.propTypes = {
  label: PropType.string,
  field: PropType.object.isRequired,
  form: PropType.object.isRequired,
  required: PropType.bool,
  col: PropType.object,
}

export default FieldFormGroup;
