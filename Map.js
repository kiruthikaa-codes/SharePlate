import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
}

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: "100%", height: "400px" }} center={{ lat: 37.7749, lng: -122.4194 }} zoom={12}>
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};
