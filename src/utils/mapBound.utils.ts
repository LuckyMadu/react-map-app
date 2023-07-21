import { MapModel } from "@models/map/Map";

export const calculateMapBounds = (locations: MapModel[]) => {
  if (locations.length === 0) return null;

  let minLat = locations[0].lat;
  let maxLat = locations[0].lat;
  let minLng = locations[0].long;
  let maxLng = locations[0].long;

  for (let i = 1; i < locations.length; i++) {
    const { lat, long } = locations[i];
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
    minLng = Math.min(minLng, long);
    maxLng = Math.max(maxLng, long);
  }

  const center = {
    lat: (minLat + maxLat) / 2,
    lng: (minLng + maxLng) / 2,
  };

  const bounds = {
    nw: { lat: maxLat, lng: minLng },
    se: { lat: minLat, lng: maxLng },
  };

  return { center, bounds };
};
