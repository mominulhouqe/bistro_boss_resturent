import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

  const {loggedUser} = useContext(AuthContext)

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data); // You can perform actions like API calls or state updates here
loggedUser(data.email, data.password)
.then(result => {
  const alreadyLogin = result.user
  console.log(alreadyLogin);
})
.catch(error => console.log(error.message))


  };

  return (
    <div>
      <Helmet><title>Login</title></Helmet>
      <div>
        <div className="flex justify-center  items-center min-h-screen ">
          <div className="w-full max-w-sm my-20 bg-white shadow-md border rounded-2xl px-16 py-16">
            <h2 className="text-4xl font-bold mb-6  text-center ">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  {...register("email")}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center space-x-2 flex-wrap space-y-5 sm:justify-center   justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  // onClick={handleGooglePopup}
                  className="flex gap-2 items-center btn  hover:bg-red-600  btn-outline  font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In with Google
                </button>
                <p className=''>
                  Are you new here? Please <Link className='text-yellow-500 underline font-semibold' to='/register'>Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
