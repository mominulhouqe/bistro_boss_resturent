import React, { useState } from 'react';
import MenuCard from '../../MenuCard/MenuCard';

const OrderTab = ({ items }) => {
    const itemsPerPage = 3; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className='grid grid-cols-1 lg:mx-5 lg:grid-cols-3 my-5 gap-5'>
                {currentItems.map(item => (
                    <MenuCard
                        key={item._id}
                        item={item}
                    />
                ))}
            </div>
            <div className="pagination">
                {items.length > itemsPerPage && (
                    <ul className='flex justify-center items-center gap-1'>
                        {Array.from(Array(Math.ceil(items.length / itemsPerPage)), (item, index) => (
                            <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                                <button className='rounded-full p-4 btn my-4 bg-red-500' onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OrderTab;
