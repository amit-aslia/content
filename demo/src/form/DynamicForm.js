import React, { Component } from 'react';
import { Field, Form, Formik } from 'formik';

import Thumb from './Thumb';
import Textbox from './Textbox';
import FileUpload from './FileUpload';
import Select from './Select';
 
const MyInput = ({ field, form, ...props }) => {
  // console.log('field, props...', field, props); 
  return <input {...field} {...props} />;
};

class DynamicForm extends Component {

  renderFields(inputs) {
    return inputs.map(input => {
      if(input.type === 'select') {
        return <Select input={input} />;
      }

      if(input.type === 'file') {
        return <FileUpload input={input} />;
      }

      if(input.type === 'text') {
        return <Textbox input={input} />;
      }
    })
  }

  getInitialValues(inputs) {
    //declare an empty initialValues object
    const initialValues = {};
    //loop loop over fields array
    //if prop does not exit in the initialValues object,
    // pluck off the name and value props and add it to the initialValues object;
    inputs.forEach(field => {
      if(!initialValues[field.name]) {
        initialValues[field.name] = field.value;
      }
    });

    //return initialValues object
    return initialValues;
  }

  handleFormSubmit = (values) => {
    // console.log(values);
  }

  render() {
    const initialValues = this.getInitialValues(this.props.fields);

    return (
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            // console.log('this is value',values);
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } 
            else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              {console.log('this is props', props)}
              {this.renderFields(this.props.fields)}
              <Field name="lastName" placeholder="Doe" component={MyInput} />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default DynamicForm;
