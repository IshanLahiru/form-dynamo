import React from 'react';
interface FormProps {}

// Form component
const Form:React.FC<FormProps> = () => {
    return (
        <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
};
