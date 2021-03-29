import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Select = ({input}) => (
    <div key={input.name}>
      <label>{input.label}</label>
      <div>
        <Field name={input.name}>
            {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
            }) => {
            const defaultOption = <option key='default' value=''></option>;
            const options = input.data.map(i => <option key={i} value={i}> {i} </option> );
            const selectOptions = [defaultOption, ...options];

            return (<div>
                <select value={field.value} {...field}>
                {
                    selectOptions
                }
                </select>
                {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
                )}
            </div>);
        }}
        </Field>
      </div>
    </div>
);

Select.propTypes = {
    input: PropTypes.object.isRequired
};

export default Select;
