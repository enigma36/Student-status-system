import "./inputForm.css";

const InputForm = (props) => {


  return (
    <div>
      <label></label> 
      <input
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputForm;
