import { useEffect, useState } from 'react';

export interface FormProps {
  Schema: Record<string, unknown>;
  formData: Record<string, unknown>;
  readonly?: boolean;
}

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      console.log('Form submitted:', formData);
      // Reset form state after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      setFormSubmitted(false);
    }
  }, [formData, formSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Reset corresponding form error if user starts typing again
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    let isValid = true;
    const newFormErrors = { ...formErrors };

    Object.keys(formData).forEach((fieldName) => {
      if (!formData[fieldName]) {
        newFormErrors[fieldName] = `${fieldName} is required`;
        isValid = false;
      }
    });

    if (!isValid) {
      setFormErrors(newFormErrors);
      return;
    }

    // Form submission
    setFormSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {formErrors.firstName && <div>{formErrors.firstName}</div>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {formErrors.lastName && <div>{formErrors.lastName}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <div>{formErrors.email}</div>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {formErrors.message && <div>{formErrors.message}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
