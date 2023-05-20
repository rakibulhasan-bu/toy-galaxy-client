// import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const TabCategory = () => {
  return (
    <div id="category" className="container mx-auto">
      <Tabs>
        <TabList className="flex items-center justify-center">
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
          <Tab>Title 4</Tab>
          <Tab>Title 5</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
