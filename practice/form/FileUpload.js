import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Thumb from './Thumb';

const FileUpload = ({input}) => (
    <div key={input.name}>
    <label>{input.label}</label>
    <div>
    <Field name={input.name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors, setFieldValue, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => (
        <div>
          <div style={{marginTop: "10px"}}>
            <input type="file" name={field.name} 
              onChange={(event) => {
                setFieldValue(input.name, event.currentTarget.files[0]);
              }}
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
          <Thumb file={values[input.name]} />
        </div>
      )}
    </Field>
    </div>
  </div>
);

FileUpload.propTypes = {
    input: PropTypes.object.isRequired
};

export default FileUpload;
