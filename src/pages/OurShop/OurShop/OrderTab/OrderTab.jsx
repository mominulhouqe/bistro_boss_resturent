import React from 'react';
import MenuCard from '../../MenuCard/MenuCard';

const OrderTab = ({ items }) => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:mx-5 lg:grid-cols-3 my-5 gap-5'>
                {
                    items.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;