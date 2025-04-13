import { useRef } from "react";

const UnControlledForm = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const submitHandler = (e) => {
    console.log("Name: ", nameRef.current.value);
    console.log("Age: ", ageRef.current.value);
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameRef} />
      <input name="age" type="number" placeholder="Age" ref={ageRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UnControlledForm;
