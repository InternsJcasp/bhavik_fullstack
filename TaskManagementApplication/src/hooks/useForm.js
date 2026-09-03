import { useState } from "react";

export function useForm({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      const err = validate ? validate({ ...values, [name]: value }) : {};
      setErrors(err);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    if (validate) {
      const err = validate({ ...values, [name]: values[name] });
      setErrors(err);
    }
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    const err = validate ? validate(values) : {};
    setErrors(err);
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
    );
    if (Object.keys(err).length === 0) {
      onSubmit(values);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  };
}
