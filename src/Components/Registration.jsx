import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Link } from "react-router-dom";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text">also can register with</span>
            </label>
            <div className="flex  gap-5">
              <button className="btn btn-sm">Google</button>
              <button className="btn btn-sm">github</button>
            </div>
          </div>
          <div className="mx-auto mb-5">
            <small>
              Already have account? Please{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
