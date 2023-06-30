import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const MenuCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [refetch] = useCart();


    const handleToCart = (item) => {
        console.log(item);

        if (user && user.email) {
            const orderItem = { menuItemId: _id, name, image, price, email: user.email };
            fetch('https://bristo-boss-server-mominulhouqe.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire('Added successful!', 'success');
                        refetch();
                    } else {
                        Swal.fire({
                            title: 'Please Login to order the food',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login Now!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login', { state: { from: location } });
                            }
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Please Login to order the food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} className="h-96" alt="Shoes" />
                </figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center my-4">
                        <button onClick={() => handleToCart(item)} className="btn btn-primary">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
