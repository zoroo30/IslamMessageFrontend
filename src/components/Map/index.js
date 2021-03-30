import * as React from "react";
import { useState } from "react";
import MapGL, { Marker } from "react-map-gl";

export default function Map({ lng, lat }) {
  const [viewport, setViewport] = React.useState({
    longitude: lng,
    latitude: lat,
    zoom: 14,
  });

  return (
    <MapGL
      {...viewport}
      width="500px"
      height="200px"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10}>
        <div
          style={{
            backgroundColor: "red",
            width: "20px",
            height: "20px",
            borderRadius: "100%",
          }}
        ></div>
      </Marker>
    </MapGL>
  );
}
