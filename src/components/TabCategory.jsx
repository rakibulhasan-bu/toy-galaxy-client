import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CarCard from "./CarCard";
// import "react-tabs/style/react-tabs.css";
const TabCategory = () => {
  const [activeTab, setActiveTab] = useState("Speedy_Racers");
  const [toys, setToys] = useState([]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`https://toy-galaxy-server-two.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => setToys(result))
      .catch((error) => console.log(error));
  }, [activeTab]);
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
        <TabList className="flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-x-8">
          <Tab
            onClick={() => handleTabClick("Speedy_Racers")}
            className="cursor-pointer text-base font-semibold lg:text-lg"
            selectedClassName="btnTab"
          >
            Speedy Racers
          </Tab>
          <Tab
            onClick={() => handleTabClick("Monster_Machines")}
            className="cursor-pointer text-base font-semibold lg:text-lg"
            selectedClassName="btnTab"
          >
            Monster Machines
          </Tab>
          <Tab
            onClick={() => handleTabClick("Rescue_Heroes")}
            className="cursor-pointer text-base font-semibold lg:text-lg"
            selectedClassName="btnTab"
          >
            Rescue Heroes
          </Tab>
          <Tab
            onClick={() => handleTabClick("Everyday_City_Cars")}
            className="cursor-pointer text-base font-semibold lg:text-lg"
            selectedClassName="btnTab"
          >
            Everyday City Cars
          </Tab>
          <Tab
            onClick={() => handleTabClick("Construction_Crew")}
            className="cursor-pointer text-base font-semibold lg:text-lg"
            selectedClassName="btnTab"
          >
            Construction Crew
          </Tab>
        </TabList>
        <div className="py-12">
          <TabPanel
            data-aos="fade-up"
            data-aos-duration="2000"
            className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {toys && toys.map((toy) => <CarCard key={toy._id} toy={toy} />)}
          </TabPanel>
          <TabPanel
            data-aos="fade-up"
            data-aos-duration="2000"
            className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {toys && toys.map((toy) => <CarCard key={toy._id} toy={toy} />)}
          </TabPanel>
          <TabPanel
            data-aos="fade-up"
            data-aos-duration="2000"
            className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {toys && toys.map((toy) => <CarCard key={toy._id} toy={toy} />)}
          </TabPanel>
          <TabPanel
            data-aos="fade-up"
            data-aos-duration="2000"
            className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {toys && toys.map((toy) => <CarCard key={toy._id} toy={toy} />)}
          </TabPanel>
          <TabPanel
            data-aos="fade-up"
            data-aos-duration="2000"
            className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {toys && toys.map((toy) => <CarCard key={toy._id} toy={toy} />)}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCategory;
