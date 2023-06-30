import React, { useEffect, useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const { loginUser, loginWithPopup } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const alreadyLogin = result.user;
        reset();
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while logging in!',
          confirmButtonText: 'Try Again',
        });
      });
  };

  // const signInWithGoogle = () => {
  //   loginWithPopup()
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
  //       fetch('http://localhost:5000/users', {
  //         method: 'POST',
  //         headers: {
  //           'content-type': 'application/json',
  //         },
  //         body: JSON.stringify(saveUser),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data) {
  //             Swal.fire({
  //               icon: 'success',
  //               title: 'Signed in with Google successfully!',
  //               showConfirmButton: false,
  //               timer: 1500,
  //             });
  //             navigate(from, { replace: true });
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error.message);
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: 'An error occurred while logging in with Google!',
  //             confirmButtonText: 'Try Again',
  //           });
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'An error occurred while logging in with Google!',
  //         confirmButtonText: 'Try Again',
  //       });
  //     });
  // };

  const handleCaptcha = (captchaValue) => {
    setDisable(!validateCaptcha(captchaValue));
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-sm my-20 bg-white shadow-md border rounded-2xl px-16 py-16">
          <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
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
                {...register('email')}
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
                {...register('password')}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            {/* captcha validation */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                <LoadCanvasTemplate onGetCaptcha={handleCaptcha} />
              </label>
              <input
                type="text"
                className="input input-bordered w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Type the captcha"
                name="captcha"
              />
            </div>

            <div className="flex items-center space-x-2 flex-wrap space-y-5 sm:justify-center justify-between">
              <button disabled={disable} type="submit" className="btn btn-primary">
                Sign In
              </button>

           
                <p><small>New Here? <Link to="/register">Create an account</Link> </small></p>
                <SocialLogin></SocialLogin>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
