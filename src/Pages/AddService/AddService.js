import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
  axios.post('http://localhost:5000/services', data)
  .then(res=>{
    if(res.data.insertedId){
      alert('add successfully');
      reset();
    }
  })

  }




  return (
    <div>
      <h2>Add service</h2> br
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <input {...register("description")} placeholder="Description" />
      <input {...register("img")} placeholder="Img-url" />
      <input type="number" {...register("price")} placeholder="Price"/>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddService;