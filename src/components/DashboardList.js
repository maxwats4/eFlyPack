import "./DashboardList.css"; // Import CSS file for styling
import React, { useState, useEffect } from "react";

//to do list
//Convert C to F with temps.
// put a note that says if that is on average higher or lower
const DashboardList = () => {
  // Define a JavaScript dictionary with key being a string and two values
  const [RiverInformation, setRiverInformation] = useState({
    "Madison River at Kirby Ranch nr Cameron MT": {
      waterFlow: "(No Data)",
      waterTemp:"(No Data)",
      siteCode: "06038800",
      height: "(No Data)",
    },
    "Madison River near West Yellowstone": {
      waterFlow: "(No Data)",
      waterTemp: "(No Data)",
      siteCode: "06037500",
      height: "(No Data)",
    },
    "Henrys Fork near Island Park": {
      waterFlow: "(No Data)",
      waterTemp: "(No Data)",
      siteCode: "13042500",
      height: "(No Data)",
    },
    "Henrys Fork near Rexburg": {
      waterFlow: "(No Data)",
      waterTemp: "(No Data)",
      siteCode: "13056500",
      height: "(No Data)",
    },
    "Henrys Lake Outlet": {
      waterFlow: "(No Data)",
      waterTemp: "(No Data)",
      siteCode: "13039500",
      height: "(No Data)",
    },
    "Firehole River near West Yellowstone": {
      waterFlow: 1.0,
      waterTemp: "(No Data)",
      siteCode: "06036905",
      height: "(No Data)",
    },
  });

  //function that makes and stores a list of all of the dictionary names and sidecodes
  function loadRiverLocationsList() {
    const namesList = [];
  
    for (const key in RiverInformation) {
      namesList.push(key);
    }
  
    return namesList;
  }

  // Function to fetch water flow and temperature data from USGS Water Services API
  async function fetchRiverData(siteCode) {
    const baseUrl = "https://waterservices.usgs.gov/nwis/iv";
    const params = {
      format: "json",
      sites: siteCode,
      siteStatus: "all",
      parameterCd: "00060,00010,00065", // Flow and temperature parameters
    };

    const url = new URL(baseUrl);
    url.search = new URLSearchParams(params).toString();

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  //Function to convert celsius to fahrenheit


//Function to update the dictionry with accurate live data
  useEffect(() => {
    async function loadRiverData(name) {
      try {
        const data = await fetchRiverData(RiverInformation[name].siteCode);

        console.log(data);
        if (data && data.value && data.value.timeSeries) {
          let updatedRiverInfo = { ...RiverInformation[name] };
  
          data.value.timeSeries.forEach(series => {
            switch (series.variable.variableCode[0].value) {
              case "00060": // Flow
                updatedRiverInfo = {
                  ...updatedRiverInfo,
                  waterFlow: series.values?.[0]?.value?.[0]?.value ?? updatedRiverInfo.waterFlow
                };
                break;
              case "00010": // Temperature
                updatedRiverInfo = {
                  ...updatedRiverInfo,
                  waterTemp: series.values?.[0]?.value?.[0]?.value ?? updatedRiverInfo.waterTemp
                };
                break;
              case "00065": // height
                updatedRiverInfo = {
                  ...updatedRiverInfo,
                  height: series.values?.[0]?.value?.[0]?.value ?? updatedRiverInfo.height
                };
                break;
              // Add more cases for other properties as needed
              default:
                break;
            }
          });
  
          setRiverInformation(prevRiverInformation => ({
            ...prevRiverInformation,
            [name]: updatedRiverInfo
          }));
        } else {
          console.log("Data for " + name + " not found or incomplete.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    // //TESTING***************
    // loadRiverData("Firehole River near West Yellowstone");
    // // "Henrys Fork near Island Park" - just water flow - no temp
    // //"Hebgen Lake near west yellowstone" - has no data returned
    // //"Henrys Lake Outlet" just has flow

    //loop that pupulates all of the dictionary with RiverInformation
    const namesList = loadRiverLocationsList();

    for (let i = 0; i < namesList.length; i++) {
       loadRiverData(namesList[i]);
    }
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="list-container">
      <h2 className="list-title">Current River Flow Conditions (USGS Water Data)</h2>
      <ul className="list">
        {Object.entries(RiverInformation).map(
          ([key, { waterFlow, waterTemp,height }], index) => (
            <li key={index} className="list-item">
               <div className="name">{key}</div>
                <div className="details">
                  <span>Water Flow: {waterFlow} cfs | </span>
                  <span>Height: {height} ft | </span>
                  <span>Water Temp: {waterTemp} C</span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default DashboardList;
