import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import InfoContainer from "./components/InfoContainer";
import PageSwitch from "./PageSwitch";
import BottomInfoContainer from "./components/BottomInfoContainer";
import DashboardList from "./components/DashboardList";
import HatchChart from "./components/HatchChart";

import "./components/styles.css";

//Main Method
const RootComponent = () => {
  return (
    <StrictMode>
      <h1>eFlyPack</h1>
      <InfoContainer />
      <PageSwitch />
      <DashboardList />
      <div class="banner">
        <h1>Yellowstone Hatching Cycle</h1>
      </div>
      <HatchChart />
      <BottomInfoContainer />
    </StrictMode>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RootComponent />);
