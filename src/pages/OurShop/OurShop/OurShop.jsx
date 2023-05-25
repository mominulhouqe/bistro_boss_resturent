import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import shop from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const OurShop = () => {

    const [tabIndex, setTabIndex] = useState(0)


    return (
        <div>
            <Helmet><title>Our Shop || Bristro Boss</title></Helmet>

            <div className='mb-6 uppercase'>
                <Cover img={shop} title={"OUR SHOP"} description={"Would you like to try a dish? ."} ></Cover>
            </div>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
                <TabList className="uppercase">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>Drinks</Tab>
                 
                </TabList>
                <TabPanel>
                    title 1
                </TabPanel>
                <TabPanel>
                    thanki
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default OurShop;