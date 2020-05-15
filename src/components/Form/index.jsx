import React, { useState } from "react";
import Input from "../Ui/Input";
const Form = () => {
  const [data, setData] = useState({
    name: "",
  });

  const handleInputChange = (event) => {
    const name = event.target.value;
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(name);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name"> Nombre </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="mail"> Email </label>
          <input
            type="email"
            name="mail"
            id="mail"
            onChange={handleInputChange}
          />
        </div>
       <div>
       <label htmlFor="number">Telefono</label>
        <Input
          id="number"
          name="telefono"
          inputType="text"
          placeholder=""
          InputWidth="middle"
        />
       </div>
        <Input
          name="password"
          inputType="password"
          className="input password"
        />
      </form>
    </div>
  );
};

export default Form;
