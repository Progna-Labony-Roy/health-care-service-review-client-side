import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email , password)
    .then((result) =>{
        const user = result.user;
        console.log(user);
        form.reset();
    })
    .catch( (error) =>{
        console.error(error)
    })
  };


  return (
    <div className="flex justify-center">
      <div className="w-2/5 mt-12">
        <h2 className="text-2xl font-semibold mt-6">Please, Sign up</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
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
        <p>
          If you don't have an account, please{" "}
          <Link to="/signup" className="text-teal-400 font-bold hover:text-lg">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
