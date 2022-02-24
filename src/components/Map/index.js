import React from "react";
import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-maps";

export default function YandexMaps() {
  return (
    <div>
      <YMaps className="w-full ">
        <Map
          className="w-full"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
        >
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    </div>
  );
}
