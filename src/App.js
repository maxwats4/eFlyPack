import "./components/styles.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import React, { useEffect, useState } from "react";
import "./Location";

//To Do: Make the map flexible depending on the size of the screen.

// Red Marker
const customIconRed = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/RedMarker.png"),
  iconSize: [38, 38], // size of the icon
});

// Green Marker
const customIconGreen = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/GreenMarker.png"),
  iconSize: [38, 38], // size of the icon
});

// Orange Marker
const customIconOrange = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/OrangeMarker.png"),
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

//Pulls live weather data and puts it into locations
async function fetchWeatherData(index) {
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    window.Locations[index].getLatitude() +
    "&lon=" +
    window.Locations[index].getLongitude() +
    "&units=imperial&appid=8003f2b648dfae7cf096951064b5a093";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // Additional code for updating global objects based on index
    //Wind speed need to be in miles per hour, not meters per second

    updateGlobalObject(
      index,
      data.clouds.all,
      data.main.temp,
      data.wind.speed,
      data.weather[0].description
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to update the values of an object in the array based on index
const updateGlobalObject = (
  index,
  newCloudRating,
  newLocationTemp,
  newLocationWind,
  newLocationWeatherConditions
) => {
  // Make a copy of the current state
  const updatedObjects = [...window.Locations];

  // Update the values of the object at the specified index
  updatedObjects[index].locationCloudRating = newCloudRating;
  updatedObjects[index].setLocationTemp(newLocationTemp);
  updatedObjects[index].setLocationWind(newLocationWind);
  updatedObjects[index].setLocationWeatherConditions(
    newLocationWeatherConditions
  );
  // Update the state, triggering a re-render
  window.Locations = updatedObjects;
};

// basically the main method
// this is JXL
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      for (let i = 0; i < window.Locations.length; i++) {
        fetchWeatherData(i);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchDataAndUpdate();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  //Popup markers
  const markers = [
    {
      geocode: [44.428767, -111.356669],
      popUp: (
        <p>
          Location: {window.LocationBuffaloDock.getName()}
          <br />
          Current Weather Conditions:{" "}
          {window.LocationBuffaloDock.getLocationWeatherConditions()}
          <br />
          Cloud Rating: {window.LocationBuffaloDock.getLocationCloudRating()}%
          <br />
          Current Temp: {window.LocationBuffaloDock.getLocationTemp()} degrees
          <br />
          Current Wind: {window.LocationBuffaloDock.getLocationWind()} MpH
        </p>
      ),
      Icon: customIconRed,
    },
    {
      geocode: [44.500751, -111.33618],
      popUp: (
        <p>
          Location: {window.LocationMacksInn.getName()}
          <br />
          Current Weather Conditions:{" "}
          {window.LocationMacksInn.getLocationWeatherConditions()}
          <br />
          Cloud Rating: {window.LocationMacksInn.getLocationCloudRating()}%
          <br />
          Current Temp: {window.LocationMacksInn.getLocationTemp()} degrees
          <br />
          Current Wind: {window.LocationMacksInn.getLocationWind()} MpH
        </p>
      ),
      Icon: customIconRed,
    },
    {
      geocode: [44.620299, -111.373187],
      popUp: (
        <p>
          Location: {window.LocationHenrysLakeBoatLaunch.getName()}
          <br />
          Current Weather Conditions:{" "}
          {window.LocationHenrysLakeBoatLaunch.getLocationWeatherConditions()}
          <br />
          Cloud Rating:{" "}
          {window.LocationHenrysLakeBoatLaunch.getLocationCloudRating()}%
          <br />
          Current Temp: {window.LocationHenrysLakeBoatLaunch.getLocationTemp()}{" "}
          degrees
          <br />
          Current Wind: {window.LocationHenrysLakeBoatLaunch.getLocationWind()}{" "}
          MpH
        </p>
      ),
      Icon: customIconRed,
    },
    {
      geocode: [44.83127, -111.514738],
      popUp: (
        <p>
          Location: {window.LocationThreeDollarBridge.getName()}
          <br />
          Current Weather Conditions:{" "}
          {window.LocationThreeDollarBridge.getLocationWeatherConditions()}
          <br />
          Cloud Rating:{" "}
          {window.LocationThreeDollarBridge.getLocationCloudRating()}%
          <br />
          Current Temp: {window.LocationThreeDollarBridge.getLocationTemp()}{" "}
          degrees
          <br />
          Current Wind: {window.LocationThreeDollarBridge.getLocationWind()} MpH
        </p>
      ),
      Icon: customIconRed,
    },
  ];

  if (loading) {
    // Display a loading indicator while data is being fetched
    return <div>Fetching Live Data...</div>;
  }
  return (
    <div className="map-container">
      <MapContainer center={[44.423176, -111.372181]} zoom={13}>
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* WATERCOLOR CUSTOM TILES */}
        {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
        {/* GOOGLE MAPS TILES */}
        {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {/* Mapping through the markers */}
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={marker.Icon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}

          {/* Hard coded markers */}
          {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
