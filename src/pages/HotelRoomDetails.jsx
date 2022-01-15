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
        url: roomDetails[0]?.poster,
      },
      {
        url: roomDetails[0]?.images[1],
      },
      {
        url: roomDetails[0]?.images[2],
      },
      {
        url: roomDetails[0]?.images[3],
      },
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
                    width: "100%",
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                paddingLeft: "20px"
              }}
            >
              <div style={{ display: "flex" }}>
                <div>
                  <h2>{i.name}</h2>
                  <p>{i.location}</p>
                </div>
                <div>
                  <h3>{i.rating}</h3>
                </div>
              </div>
              <div style={{ textAlign: "left", width: "50%" }}>
                <h2>Description</h2>
                <p>{i.descripition}</p>
                <div style={{ color: "red" }}>
                  <h3>Read more</h3>
                </div>
              </div>
              <div>
                <h2>Amenities</h2>
              </div>
              <div style={{ display: "flex", gap: "2rem" }}>
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
              <div style={{ display: "flex", gap: "2rem" }}>
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
              <div style={{ color: "red" }}>
                <h3>Show More</h3>
              </div>
              <div >
                <div>
                  <h2>Choose your room</h2>
                </div>
                <div style={{ border: "1px solid rgb(215,215,215)", width: "45%", borderRadius: "20px"}}>
                  <div style={{ background:"rgb(179,179,195)"}}>
                    <p>★ SELECTED CATEGORY</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <div>
                        <h2>Classic (2X) ✅</h2>
                        <p>Room size: 156 sqft</p>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
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
                    </div>
                    <div style={{ padding: "10px", paddingLeft:"40px" }}>
                      <img src={i.images[0]} alt="img" height="160px" style={{borderRadius:"10px"}}/>
                    </div>
                  </div>
                  
                  <div>
                    <p style={{ lineHeight: "5px" }}>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                          lineHeight: "24px",
                          // color: "rgb(238,42,35)",
                        }}
                      >
                        ₹{i.price}
                      </span>
                      <span
                        style={{
                          textDecoration: "line-through",
                          fontSize: "16px",
                          lineHeight: "25px",
                          color: "rgb(180,186,188)",
                        }}
                      >
                        ₹{((i.price * 100) / (100 - i.discount)).toFixed(2)}
                      </span>
                      <span style={{ textAlign: "right", width: "150px", marginLeft:"40%"}}>
                        <button style={{ cursor: "pointer", border: "1px solid rgb(215,215,215)", fontSize: "12px", fontWeight:"700", padding: "10px",width: "150px", borderRadius: "5px"}}> ✅ SELECTED</button>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default UserDetails;
