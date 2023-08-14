const CustomerNameInput = (props) => {
  const { firstnameError, lastnameError, updateLastName, updateFirstName } =
    props;

  const onChangeFirstName = (event) => {
    updateFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    updateLastName(event.target.value);
  };

  return (
    <>
      <div className="customer-input-container">
        <label htmlFor="firstName">FirstName*</label>
        <input
          onChange={onChangeFirstName}
          id="firstName"
          type="text"
          placeholder="Enter Firstname"
          className={firstnameError ? "registration-error-box" : ""}
        />
      </div>
      <div className="customer-input-container">
        <label htmlFor="lastName">LastName*</label>
        <input
          onChange={onChangeLastName}
          id="lastName"
          type="text"
          placeholder="Enter Lastname"
          className={lastnameError ? "registration-error-box" : ""}
        />
      </div>
    </>
  );
};

export default CustomerNameInput;
