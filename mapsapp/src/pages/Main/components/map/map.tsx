import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './Map.scss'

mapboxgl.accessToken = "pk.eyJ1IjoibWFraGl0ciIsImEiOiJja3h4a3ViNGMwamd5Mm9ycTB2NjM5ZGhjIn0.ZLAA9nNM-a2DTiWN1YrGHQ"

const Map = () => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);
  const [lng, setLng] = useState(37.60);
  const [lat, setLat] = useState(55.73);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;
    const mapboxMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    setMap(mapboxMap);

    if (mapboxMap) {
      mapboxMap.on('move', () => {
        setLng(+(mapboxMap.getCenter().lng.toFixed(4)));
        setLat(+(mapboxMap.getCenter().lat.toFixed(4)));
        setZoom(+(mapboxMap.getZoom().toFixed(2)));
      })
    }

    const marker1 = new mapboxgl.Marker()
      .setLngLat([37.62, 55.75])
      .addTo(mapboxMap);

    const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45, draggable: true })
      .setLngLat([37.72, 55.75])
      .addTo(mapboxMap);

    return () => {
      mapboxMap.remove();
    };

  }, []);

  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapNode} className="map-container" />
    </>
  )
}

export default Map

