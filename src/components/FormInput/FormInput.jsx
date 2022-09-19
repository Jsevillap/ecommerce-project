const FormInput = ({ label, htmlFor, ...otherProps }) => {
  return (
    <div className="input-container">
      <label htmlFor={htmlFor}>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
