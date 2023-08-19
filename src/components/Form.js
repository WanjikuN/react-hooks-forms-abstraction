import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  })
  const [submittedData, setSubmittedData] = useState([]);
  
  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  // }
  
  function handleChange(event) {
    const key = event.target.name
    const value = event.target.value
    setFormData({
      ...formData,
      [key]: value,
    })
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray);
    setFormData({
      firstName: "",
      lastName: ""
    })
    console.log(dataArray);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName} name="firstName"/>
      <input type="text" onChange={handleChange} value={formData.lastName} name="lastName" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
