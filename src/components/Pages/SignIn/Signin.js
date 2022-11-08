import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signin = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name =form.name.value;
    const email= form.email.value;
    const password = form.password.value;
    console.log(name)

    createUser(email,password)
    .then((result) =>{

        const user=result.user;
        console.log(user);
        form.reset();
    })
    .catch((error) => {
        console.error(error);
    });
  }

  return (
    <div className="flex justify-center">
      <div className="w-2/5 mt-12">
        <h2 className="text-2xl font-semibold">Please, Sign up</h2>
        <form onSubmit={handleSignin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="SignUp"
              className="btn btn-outline max-w-fit"
            />
          </div>
        </form>
        <p>Already have an account? <Link to='/login' className='text-teal-400 font-bold hover:text-lg'>Login</Link></p>
        {/* <p className="text-rose-600">{error}</p> */}
      </div>
    </div>
  );
};

export default Signin;
