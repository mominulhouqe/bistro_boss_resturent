import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const { refetch, data: cart = [] } = useQuery(['carts', user?.email], async () => {
    const res = await fetch(`https://bristo-boss-server-mominulhouqe.vercel.app/carts?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${token}` // Make sure to use 'Bearer' with a capital 'B'
      }
    });
    return res.json();
  });

  return [refetch, cart];
};

export default useCart;
