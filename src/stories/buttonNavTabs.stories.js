import React, { useState } from 'react';
import ButtonNavTabs from '../common/components/buttonNavTabs';
import { BrowserRouter as Router } from 'react-router-dom';
import * as R from 'ramda';
import { tabPaths } from "../mockData";

export default {
  component: ButtonNavTabs,
  title: 'ButtonNavTabs',
};

export const TwoTabs = () => {
  const [activeTab, setActiveTab] = useState("first");
  return (
    <Router>
      <ButtonNavTabs
        onClick={title => setActiveTab(title)}
        activeTab={activeTab}
        tabPaths={R.slice(0, 2, tabPaths)}
      />
    </Router>
  )
}

export const FourTabs = () => {
  const [activeTab, setActiveTab] = useState("first");
  return (
    <Router>
      <ButtonNavTabs
        onClick={title => setActiveTab(title)}
        activeTab={activeTab}
        tabPaths={R.slice(0, 4, tabPaths)}
      />
    </Router>
  )
}