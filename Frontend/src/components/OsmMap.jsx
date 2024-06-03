// import "./styles.css";
// import "leaflet/dist/leaflet.css";
// import { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";

// export default function App() {

//   const [markers, setMarkers] = useState([
//     {
//       geocode: [18.9572, 72.8197],
//       popUp: "Girgaon",
//       vendor: {
//         name: "Ram",
//         product: "Grains",
//         contact: "+91 1234567890"
//       }
//     },
//     {
//       geocode: [18.941482, 72.823679],
//       popUp: "Marine Drive",
//       vendor: {
//         name: "Sham",
//         product: "Vegetables",
//         contact: "+91 9876543210"
//       }
//     },
//     {
//       geocode: [19.0600, 72.8460],
//       popUp: "Siddhivinayak Temple",
//       vendor: {
//         name: "Atharva",
//         product: "Fruits",
//         contact: "+91 9998887776"
//       }
//     },
//     {
//       geocode: [19.0177, 72.8562],
//       popUp: "Haji Ali Dargah",
//       vendor: {
//         name: "Ninad",
//         product: "Pulses",
//         contact: "+91 8765432109"
//       }
//     },
//     {
//       geocode: [18.9398, 72.8354],
//       popUp: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
//       vendor: {
//         name: "Gaurav",
//         product: "Leafy Vegetables",
//         contact: "+91 9876541230"
//       }
//     },
//     {
//       geocode: [19.0759, 72.8774],
//       popUp: "Colaba Causeway",
//       vendor: {
//         name: "Rohan",
//         product: "Spices",
//         contact: "+91 7654321098"
//       }
//     },
//     {
//       geocode: [19.1361, 72.8258],
//       popUp: "Juhu Beach",
//       vendor: {
//         name: "Sneha",
//         product: "Seafood",
//         contact: "+91 9876543210"
//       }
//     },
//     {
//       geocode: [19.0840, 72.9083],
//       popUp: "Elephanta Caves",
//       vendor: {
//         name: "Pranav",
//         product: "Coconuts",
//         contact: "+91 8765432109"
//       }
//     },
//     {
//       geocode: [19.1110, 72.8258],
//       popUp: "Versova Beach",
//       vendor: {
//         name: "Aarti",
//         product: "Milk and Dairy Products",
//         contact: "+91 9998887776"
//       }
//     },
//     {
//       geocode: [19.0627, 72.8773],
//       popUp: "Mumbai High Court",
//       vendor: {
//         name: "Vikram",
//         product: "Sweets",
//         contact: "+91 1234567890"
//       }
//     },
//     {
//       geocode: [19.0750, 72.8777],
//       popUp: "Regal Cinema",
//       vendor: {
//         name: "Anjali",
//         product: "Snacks",
//         contact: "+91 9876543210"
//       }
//     },
//     {
//       geocode: [19.0760, 72.8759],
//       popUp: "Leopold Cafe",
//       vendor: {
//         name: "Raj",
//         product: "Beverages",
//         contact: "+91 8765432109"
//       }
//     },
//     {
//       geocode: [19.0759, 72.8777],
//       popUp: "Prince of Wales Museum (Chhatrapati Shivaji Maharaj Vastu Sangrahalaya)",
//       vendor: {
//         name: "Pooja",
//         product: "Art and Crafts",
//         contact: "+91 9876541230"
//       }
//     },
//     {
//       geocode: [18.9750, 72.8258],
//       popUp: "Nehru Science Centre",
//       vendor: {
//         name: "Rahul",
//         product: "Educational Toys",
//         contact: "+91 7654321098"
//       }
//     },
//     {
//       geocode: [19.0497, 72.8205],
//       popUp: "Mahalakshmi Temple",
//       vendor: {
//         name: "Suresh",
//         product: "Religious Items",
//         contact: "+91 8765432109"
//       }
//     },
//     {
//       geocode: [19.1018, 72.8576],
//       popUp: "Aksa Beach",
//       vendor: {
//         name: "Preeti",
//         product: "Beach Accessories",
//         contact: "+91 9998887776"
//       }
//     },
//     {
//       geocode: [19.1005, 72.8423],
//       popUp: "Madh Island",
//       vendor: {
//         name: "Neha",
//         product: "Handicrafts",
//         contact: "+91 1234567890"
//       }
//     },
//     {
//       geocode: [19.1162, 72.9047],
//       popUp: "Kanheri Caves",
//       vendor: {
//         name: "Varun",
//         product: "Souvenirs",
//         contact: "+91 9876543210"
//       }
//     },
//     {
//       geocode: [19.1670, 72.8355],
//       popUp: "Sanjay Gandhi National Park",
//       vendor: {
//         name: "Manisha",
//         product: "Nature-inspired Gifts",
//         contact: "+91 8765432109"
//       }
//     }
//   ]);
  

//   return (
//     <MapContainer center={[18.95730, 72.82480]} zoom={13}>
//       {/* OPEN STREEN MAPS TILES */}
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MarkerClusterGroup
//       >
//         {/* Mapping through the markers */}
//         {markers.map((marker) => (
//           <Marker position={marker.geocode} >
//             <Popup className="popup-container">
//               <div>
//                 <h2 className="popup-header">{marker.vendor.name}</h2>
//                 <p className="popup-content"><strong>What they sell:</strong> {marker.vendor.product}</p>
//                 <p className="popup-content"><strong>Contact:</strong> {marker.vendor.contact}</p>
//                 <button className="popup-button" onClick={() => initiateChat()}>Chat with Vendor</button>
//               </div>
//             </Popup>

//           </Marker>
//         ))}

//         {/* Hard coded markers */}
//         {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
//           <Popup>This is popup 1</Popup>
//         </Marker>
//         <Marker position={[51.504, -0.1]} icon={customIcon}>
//           <Popup>This is popup 2</Popup>
//         </Marker>
//         <Marker position={[51.5, -0.09]} icon={customIcon}>
//           <Popup>This is popup 3</Popup>
//         </Marker>
//        */}
//       </MarkerClusterGroup>

//     </MapContainer>
//   );
// }

import React from 'react'

export default function OsmMap() {
  return (
    <div>OsmMap</div>
  )
}
