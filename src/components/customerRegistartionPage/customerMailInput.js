const CustomerMailInput = (props) => {
  const { updateEmail, emailError } = props;

  const onEnterEmailAddress = (event) => {
    updateEmail(event.target.value);
  };

  return (
    <div className="customer-input-container">
      <label htmlFor="email">Email*</label>
      <input
        onChange={onEnterEmailAddress}
        id="email"
        type="text"
        placeholder="Enter Email"
        className={emailError ? "registration-error-box" : ""}
      />
    </div>
  );
};

export default CustomerMailInput;
