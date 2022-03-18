import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="http://osm.org/copyright"></a>'
      />
    </MapContainer>
  );
}