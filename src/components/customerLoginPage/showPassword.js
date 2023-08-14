const ShowPassword = (props) => {
  const { toggleShowPassword } = props;

  const showPassword = () => {
    toggleShowPassword();
  };

  return (
    <div className="checkbox">
      <input onChange={showPassword} type="checkbox" id="showPassword" />
      <label htmlFor="showPassword">Show Password</label>
    </div>
  );
};

export default ShowPassword;
