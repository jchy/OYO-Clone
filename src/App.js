import "./styles.css";
// import Search from './Components/SearchBar/Search'
// import { PaymentMain } from './Components/Payment/PaymentMain'
// import { PaymentSide } from './Components/Payment/PaymentSide'
import HomeSearch from "./Components/SearchBar/HomeSearch";

// var initVar = {
//   days: "1",
//   new: "true",
//   date: "Thu, 14 Oct - Fri, 15 Oct",
//   room: "1 Room, 2 Guests",
//   type: "SPOT ON NON-AC",
//   price: 30722,
//   pdrop: 11684,
// };
// var payDataDetail = {
//   id: 1,
//   poster:
//     "https://images.oyoroomscdn.com/uploads/hotel_image/107750/large/7df242e6af32ec64.jpg",
//   images: [
//     "https://images.oyoroomscdn.com/uploads/hotel_image/107750/large/7df242e6af32ec64.jpg",
//     "https://images.oyoroomscdn.com/uploads/hotel_image/107750/large/bd8d99c4d6bddacd.jpg",
//     "https://images.oyoroomscdn.com/uploads/hotel_image/107750/large/bd8d99c4d6bddacd.jpg",
//   ],
//   name: "SPOT ON 76794 Joshi Lodge",
//   location: "PANAR ROAD, KATOL",
//   city: "Nagpur",
//   descripition:
//     "Did you know that we’ve got 2.5 Crore bookings since March 2020? And this is all thanks to the sanitisation & safety measures followed at our properties, from disinfecting surfaces with high-quality cleaning products and maintaining social distance to using protective gear and more.",
//   rating: 4.6,
//   price: 516,
// }

export default function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      <HomeSearch />
      {/* <PaymentSide
        initVar={initVar}
        payImg={payDataDetail.images}
        payDataDetail={payDataDetail}
      /> */}
      {/* <PaymentMain /> */}
    </div>
  );
}
