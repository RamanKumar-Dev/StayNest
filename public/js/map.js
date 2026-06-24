const map = new mapboxgl.Map({
  accessToken: mapToken,
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

// Create a Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinate
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4> <p>Exact location will be provided after booking</p>`,
    ),
  )
  .addTo(map);

// show cat on listing
// map.on("load", () => {
//   // Load an image from an external URL.
//   map.loadImage(
//     "https://docs.mapbox.com/mapbox-gl-js/assets/cat.png",
//     (error, image) => {
//       if (error) throw error;

//       // Add the image to the map style.
//       map.addImage("cat", image);

//       // Add a data source containing one point feature.
//       map.addSource("point", {
//         type: "geojson",
//         data: {
//           type: "FeatureCollection",
//           features: [
//             {
//               type: "Feature",
//               geometry: {
//                 type: "Point",
//                 coordinates: listing.geometry.coordinates,
//               },
//             },
//           ],
//         },
//       });

//       // Add a layer to use the image to represent the data.
//       map.addLayer({
//         id: "points",
//         type: "symbol",
//         source: "point", // reference the data source
//         layout: {
//           "icon-image": "cat", // reference the image
//           "icon-size": 0.25,
//         },
//       });
//     },
//   );
// });
