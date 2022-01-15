// import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import WifiIcon from "@mui/icons-material/Wifi";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import ElevatorIcon from "@mui/icons-material/Elevator";

const getDetails = () => {
  return fetch("https://oyo-server.herokuapp.com/hotel")
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((res) => {});
};
// var data = [];
var slideImages = [];
// HOOkS
function UserDetails() {
  const [data, setData] = useState([]);
  const [roomDetails, setRoomDetails] = useState([]);
  const itemDetails = useParams();
  useEffect(() => {
    getDetails().then((res) => {
      setData(res);
      setRoomDetails(
        data?.filter((rooms) => rooms.id === parseInt(itemDetails.id))
      );
    });
    slideImages = [
      {
        url: roomDetails[0]?.poster
        // caption: "Slide 1"
      },
      {
        url: roomDetails[0]?.images[1]
        // caption: "Slide 2"
      },
      {
        url: roomDetails[0]?.images[2]
        // caption: "Slide 3"
      },
      {
        url: roomDetails[0]?.images[3]
        // caption: "Slide 4"
      }
    ];
  }, [roomDetails]);
  console.log(roomDetails);

  let { isLoading, isError } = useSelector((state) => state.app, shallowEqual);
  if (isLoading) return <div>...loading</div>;
  return (
    <>
      <div>
        <div>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    height: "600px",
                    width: "100%"
                  }}
                >
                  {/* <span>{slideImage.caption}</span> */}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <div>
        {roomDetails.map((i) => (
          <>
            <h2>{i.name}</h2>
            <p>{i.location}</p>
            <h2>Description</h2>
            <span>{i.descripition}</span>
            <p>Read more</p>
            <div>
              <h2>Amenities</h2>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <p>🛏 AC</p>
              </div>
              <div>
                <p>🚘 Parking Facility</p>{" "}
              </div>
              <div>
                {" "}
                <p>🙏 Reception</p>{" "}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <p>
                  <WifiIcon /> Free Wifi
                </p>
              </div>
              <div>
                <p>📺 TV</p>
              </div>
              <div>
                <p>
                  <CameraswitchIcon /> CCTV Camera
                </p>
              </div>
              <div>
                <p>
                  <ElevatorIcon /> Elevator
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default UserDetails;
