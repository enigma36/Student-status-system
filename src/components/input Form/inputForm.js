import "./inputForm.css";

const InputForm = (props) => {
  return (
    <div>
      {/*<label>username</label> */}
      <input
      name={props.name}
      placeholder={props.placeholder} />
    </div>
  );
};

export default InputForm;
