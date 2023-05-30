import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const MenuCard = ({ item }) => {

    const { name, image, price, recipe } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleToCart = (item) => {
        console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: ''
            })
                .then(res => res.json())
                .then((data) => {

                    if (data.insertedId) {
                        Swal.fire(
                            'Added successful!',
                            'success'
                        )
                    }
                    else {
                        Swal.fire({
                            title: 'Please Login to order the food?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login Now!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login')
                            }
                        })
                    }
                    console.log(data);
                })


        }
    }

    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={image} className='h-96' alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center my-4">
                        <button onClick={() => handleToCart(item)} className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;