// import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CarCard from "./CarCard";
// import "react-tabs/style/react-tabs.css";
const TabCategory = () => {
  return (
    <div id="category" className="container mx-auto pb-2 pt-8">
      <div className=" pb-8 ">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-4xl ">
          Top Gear <span className="gradient">Showcase</span>
        </h1>

        <p className="mt-4 text-center text-gray-500 ">
          Discover the Finest Toy Cars by Category
        </p>
      </div>

      <Tabs>
        <TabList className="flex items-center justify-center gap-x-8">
          <Tab
            className="cursor-pointer text-lg font-semibold"
            selectedClassName="btnTab"
          >
            Speedy Racers
          </Tab>
          <Tab
            className="cursor-pointer text-lg font-semibold"
            selectedClassName="btnTab"
          >
            Monster Machines
          </Tab>
          <Tab
            className="cursor-pointer text-lg font-semibold"
            selectedClassName="btnTab"
          >
            Rescue Heroes
          </Tab>
          <Tab
            className="cursor-pointer text-lg font-semibold"
            selectedClassName="btnTab"
          >
            Everyday City Cars
          </Tab>
          <Tab
            className="cursor-pointer text-lg font-semibold"
            selectedClassName="btnTab"
          >
            Construction Crew
          </Tab>
        </TabList>
        <div className="py-12">
          <TabPanel className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </TabPanel>
          <TabPanel className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </TabPanel>
          <TabPanel className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </TabPanel>
          <TabPanel className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </TabPanel>
          <TabPanel className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCategory;
