import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Textbox = ({input}) => (
    <div key={input.name}>
      <label>{input.label}</label>
      <div>
      <Field name={input.name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <div>
            {/* {console.log('this is props',meta)} */}
            <input type="text"  placeholder={input.placeholder} />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
      </div>
    </div>
);

Textbox.propTypes = {
    input: PropTypes.object.isRequired
};

export default Textbox;
