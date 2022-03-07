import React from "react";
import {
  YMaps,
  Map,
  FullscreenControl,
  Placemark,
  ZoomControl,
} from "react-yandex-maps";

function YandexMap() {
  return (
    <YMaps className="w-full">
      <Map
        className="w-full"
        defaultState={{
          center: [59.751574, 37.573856],
          zoom: 5,
        }}
      >
        <Placemark geometry={[55.684758, 37.738521]} />
        <FullscreenControl />
        <ZoomControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;
