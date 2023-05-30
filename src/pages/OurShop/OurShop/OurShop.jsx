import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import shop from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../MenuCard/MenuCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


const OurShop = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink']

    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet><title>Our Shop || Bristro Boss</title></Helmet>

            <div className='mb-6 uppercase'>
                <Cover img={shop} title={"OUR SHOP"} description={"Would you like to try a dish? ."} ></Cover>
            </div>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="uppercase mx-auto lg:w-1/2 my-12">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Offered</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
             
                <TabPanel>
                    <OrderTab items={soup}> </OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                </TabPanel>
                {/* <TabPanel>
               <OrderTab items={drinks}></OrderTab>
                </TabPanel> */}
            </Tabs>


        </div>
    );
};

export default OurShop;