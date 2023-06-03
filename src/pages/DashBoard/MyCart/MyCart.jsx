import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
  const { cart, refetch } = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bristo-boss-server-mominulhouqe.vercel.app/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
            }
          })
          .catch((error) => {
            console.error('Error deleting the product:', error);
            Swal.fire('Error', 'Failed to delete the product.', 'error');
          });
      }
    });
  };

  return (
    <div className="mt-96 w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className="uppercase my-6  font-semibold flex justify-evenly">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: $ {total.toFixed(2)}</h3>

        <button className="btn btn-warning btn-sm">Pay</button>
      </div>

      <div className="overflow-x-auto p-4 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((row, index) => (
              <tr key={row._id}>
                <td>
                  <label>{index + 1}</label>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{row.name}</td>
                <td className="text-end">$ {row.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(row)} // Changed 'item' to 'row'
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt  />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
