import { useEffect, useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Normalize age input to keep it numeric
    const updatedValue = name === "age" ? Number(value) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const validateForm = () => {
    if (formData.name.trim().length < 3) {
      return "Name must be at least 3 characters long.";
    }
    if (formData.age < 18 || isNaN(formData.age)) {
      return "Age must be a number and at least 18.";
    }
    return "";
  };

  useEffect(() => {
    const validationMessage = validateForm();
    setError(validationMessage);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationMessage = validateForm();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    // Submit logic
    console.log("Submitted:", formData);
    setError(""); // Clear error on successful submit
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
