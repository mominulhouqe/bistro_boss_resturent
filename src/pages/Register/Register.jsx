import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
  const { createUser, loginWithPopup, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/login');
                }
              })
              .catch((error) => console.log(error.message));
          })
          .catch((error) => console.log(error.message));
      });
  };

  // const handleGooglePopup = () => {
  //   loginWithPopup()
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
  //       fetch('http://localhost:5000/users', {
  //         method: 'POST',
  //         headers: {
  //           'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(saveUser)
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data) {
  //             Swal.fire({
  //               icon: 'success',
  //               title: 'Signed in with Google successfully!',
  //               showConfirmButton: false,
  //               timer: 1500
  //             });
  //             navigate(from, { replace: true });
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error.message);
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: 'An error occurred while signing in with Google!',
  //             confirmButtonText: 'Try Again'
  //           });
  //         });
  //     })
  //     .catch((error) => console.log(error.message));
  // };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-sm my-20 bg-white shadow-md border rounded-2xl px-10 py-16">
          <h2 className="text-4xl font-bold mb-6 text-center">Please Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                {...register('name')}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-gray-700 font-semibold mb-2">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                required
                {...register('photoURL')}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your photo URL"
              />
            </div>
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
            <div className="flex justify-center items-center space-x-2 flex-wrap space-y-5 sm:justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>

            </div>
            <p><small>Already have an account <Link to="/login">Login</Link></small></p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
