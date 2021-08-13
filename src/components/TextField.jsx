import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className=" form-floating mb-2">
      <input
      id="floatingInput"
        className={`form-control border-0 border-bottom rounded-0 border-primary shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
       <label htmlFor={field.name}>{label}</label>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
export default TextField;