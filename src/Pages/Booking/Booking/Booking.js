import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const {serviceId}= useParams()
  const [service, setService]= useState({});

  useEffect(()=>{
    const url=`http://localhost:5000/services/${serviceId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setService(data))
  },[])

  return (
    <div>
      <img src={service.img} alt="" />
      <h1>this is booking {serviceId}</h1>
      <h2>{service.name}</h2>
    </div>
  );
};

export default Booking;