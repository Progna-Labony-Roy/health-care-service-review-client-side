import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
  const notify = () => toast("Service added succesfully!");
  const [service, setService] = useState();
  const handleServiceButton = (event) => {
    event.preventDefault();
    console.log(service);

    fetch("https://service-review-server-side-jet.vercel.app/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleOnBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <form onSubmit={handleServiceButton}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Service name?</span>
        </label>
        <input onBlur={handleOnBlur}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input onBlur={handleOnBlur}
          type="text"
          name="title"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input onBlur={handleOnBlur}
          type="text"
          name="img"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input onBlur={handleOnBlur}
          type="text"
          name="price"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input onBlur={handleOnBlur}
          type="text"
          name="description1"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">More information</span>
        </label>
        <input onBlur={handleOnBlur}
          type="text"
          name="description2"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <br />
     
      
      <div>
      <button onClick={notify} className="btn btn-accent">Add service</button>
        <ToastContainer />
      </div>
      </form>
    </div>
  );
};

export default AddServices;
