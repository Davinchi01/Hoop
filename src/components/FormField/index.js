import React from 'react'
import {Form} from 'react-bootstrap'
import {FormControlContainer} from "./style";

const FormField = ({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                type,
                             ...props
                              }) => (
    <>
      <Form.Control type="text" {...field} {...props} />
    </>
);

export default FormField
