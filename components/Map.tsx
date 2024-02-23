"use client"
import { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

export default function Map() {

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBz-sm1CQzuacVTxGwfVwiFL0BxxVAFQKQ",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: 51.509865, lng: -0.118092 };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* map component  */}
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "80%", height: "600px", margin: "auto" }}
      />
    </div>
  );
};
