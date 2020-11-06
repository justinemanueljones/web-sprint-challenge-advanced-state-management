import React from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { fetchData } from "../store/actions/index";
import Input from '@material-ui/core/Input';


const SmurfForm = () => {
  //   from react hook form

  const { register, handleSubmit, errors } = useForm();

  //    hadleing the submit

  const onSubmit = (data) => {
    
    const newSmurf = {
      name: data.Name,
      age: data.Age,
      height: data.Height,
    };
    axios.post("http://localhost:3333/smurfs", newSmurf).then((res) => {
      fetchData();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" name="Name" ref={register} />
      <input type="undefined" placeholder="Age" name="Age" ref={register} />
      <input
        type="undefined"
        placeholder="Height"
        name="Height"
        ref={register}
      />
      <input onClick={() => window.location.reload(false)} type="submit" />
    </form>
  );
};

export default SmurfForm;