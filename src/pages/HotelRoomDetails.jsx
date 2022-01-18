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
import { Link } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import { Skeleton } from "@mui/material";

// var data = [];
var slideImages = [];
// HOOkS
function UserDetails() {
  const [data, setData] = useState([]);
  const [roomDetails, setRoomDetails] = useState([]);
  const itemDetails = useParams();

  // const {city} = useSelector(state => state.Search);
  
  const getDetails = () => {
    return fetch(`https://oyo-server.herokuapp.com/hotel`)
      .then((res) => res.json())
      .then((res) => {
        setRoomDetails(
          res?.filter((rooms) => rooms.id === parseInt(itemDetails.id))
        );
      })
      .catch((res) => {});
  };

  useEffect(() => {
    getDetails();
  }, []);

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

  // if(roomDetails){
  //   setFlag(null);
  // }
  // else{
  //   setFlag(true);
  // }
  console.log(roomDetails);

  let { isLoading, isError } = useSelector((state) => state.app, shallowEqual);
  if (isLoading) return <Skeleton
  animation="wave"
  height={10}
  width="80%"
  style={{ marginBottom: 6 }}
/>;
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
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <div>
        {roomDetails.map((i) => (
          <div key={i.id}>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                margin: "5%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingLeft: "20px",

                  width: "50%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <h2>{i.name}</h2>
                    <p>{i.location}</p>
                  </div>
                  <div style={{ marginLeft: "25px", paddingTop: "5px"}}>
                    <h3 style={{ border: "1px solid red", padding: "5px", color:"red"}}>
                      {i.rating}
                      <span style={{ color: "rgb(243,146,66)" }}>★</span>
                    </h3>
                  </div>
                </div>
                <div style={{ textAlign: "left" }}>
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
                <div>
                  <div>
                    <h2>Choose your room</h2>
                  </div>
                  <div
                    style={{
                      border: "1px solid rgb(215,215,215)",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgb(179,179,195)",
                        padding: "3px",
                        borderRadius: "10px",
                        textAlign: "center",
                      }}
                    >
                      <p>
                        {" "}
                        <span style={{ color: "yellow" }}>★</span> SELECTED
                        CATEGORY
                      </p>
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
                      <div style={{ padding: "10px", paddingLeft: "40px" }}>
                        <img
                          src={i.images[0]}
                          alt="img"
                          height="160px"
                          style={{ borderRadius: "10px", marginLeft: "50px" }}
                        />
                      </div>
                    </div>

                    <div>
                      <p style={{ lineHeight: "5px" }}>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            lineHeight: "24px",
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
                        <span
                          style={{
                            textAlign: "right",
                            width: "150px",
                            marginLeft: "40%",
                          }}
                        >
                          <button
                            style={{
                              cursor: "pointer",
                              border: "1px solid rgb(215,215,215)",
                              fontSize: "12px",
                              fontWeight: "700",
                              padding: "10px",
                              width: "150px",
                              borderRadius: "5px",
                              marginLeft: "100px",
                            }}
                          >
                            {" "}
                            ✅ SELECTED
                          </button>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Checkout section */}
              <div style={{ border: "1px solid rgb(240,240,240)" }}>
                <div
                  style={{
                    background: "rgb(241,85,63)",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <span>LOG IN NOW TO GET EXCLUSIVE DEALS</span>
                  <span style={{ marginLeft: "60px" }}>
                    <button
                      style={{
                        borderRadius: "4px",
                        padding: "3px",
                        color: "white",
                        background: "rgb(247,139,123)",
                        border: "1px solid rgb(247,139,123)",
                      }}
                    >
                      LOGIN
                    </button>
                  </span>
                </div>
                <div style={{ margin: "20px" }}>
                  <div>
                    <p style={{ lineHeight: "5px", textAlign: "left" }}>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                          lineHeight: "24px",
                          color: "rgb(238,42,35)",
                        }}
                      >
                        ₹{i.price}
                      </span>
                      <span
                        style={{
                          textDecoration: "line-through",
                          fontSize: "10px",
                          lineHeight: "25px",
                          color: "rgb(180,186,188)",
                          marginLeft: "1rem",
                        }}
                      >
                        ₹{((i.price * 100) / (100 - i.discount)).toFixed(2)}
                      </span>
                      <span
                        style={{ color: "rgb(246,178,75)", marginLeft: "1rem" }}
                      >
                        {i.discount}% off
                      </span>
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "rgb(163,169,172)",
                        fontSize: "14px",
                        textAlign: "left",
                      }}
                    >
                      Inclusive of all taxes
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid rgb(240,240,240)",
                      boxShadow: "1px 1px 3px gray",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "1px solid rgb(240,240,240)",
                        padding: "10px",
                      }}
                    >
                      Sun, 16 Jan - Mon, 17 Jan
                    </div>
                    <div
                      style={{
                        borderRight: "1px solid white",
                        padding: "10px",
                      }}
                    >
                      1 Room, 2 Guests
                    </div>
                  </div>
                  <div
                    style={{
                      border: "2px solid rgb(240,240,240)",
                      boxShadow: "1px 1px 3px gray",
                      marginTop: "15px",
                      padding: "10px",
                    }}
                  >
                    Dluxe (3X)
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "16rem",
                      margin: "20px",
                      color: "rgb(34,34,34)",
                    }}
                  >
                    <div>OMOIND4 cupon applied</div>
                    <div>
                      ₹{((i.price * 100) / (100 - i.discount)).toFixed(2)}✅
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "12rem",
                      margin: "20px",
                      color: "rgb(34,34,34)",
                    }}
                  >
                    <div>Savae 5% with Wizard membership</div>
                    <div>-₹52</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      marginLeft: "20px",
                      background: "rgb(247,247,247)",
                      gap: "10rem",
                    }}
                  >
                    <div style={{ padding: "10px" }}>
                      <p>Wizard Blue at s special price</p>
                      <p>Get additional benefits upto ₹1000</p>
                    </div>
                    <div style={{ display: "flex", padding: "10px" }}>
                      <div
                        style={{
                          padding: "10px",
                          width: "80px",
                          paddingTop: "0px",
                        }}
                      >
                        <p>₹99</p>
                        <p style={{ textDecoration: "line-through" }}>₹199</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      gap: "17.5rem",
                    }}
                  >
                    <div>
                      <div style={{ margin: "20px" }}>Your savings</div>
                      <div style={{ margin: "20px" }}>Total price</div>
                      <div style={{ margin: "20px" }}>
                        <span>(Incl. of all taxes)</span>
                      </div>
                    </div>
                    <div>
                      <div style={{ margin: "20px" }}>
                        ₹
                        {(
                          (i.price * 100) / (100 - i.discount) -
                          i.price
                        ).toFixed(2)}
                      </div>
                      <div style={{ marginLeft: "20px" }}>₹{i.price}</div>
                    </div>
                  </div>
                  <div
                    style={{
                      margin: "20px",
                      background: "green",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <Link
                      to={`/payment/${itemDetails.id}`}
                      style={{
                        padding: "20px",
                        background: "green",
                        textDecoration: "none",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "18px",
                        fontWeight: "700",
                      }}
                    >
                      Continue to Book
                    </Link>
                  </div>
                  <div
                    style={{ margin: "20px", color: "red", textAlign: "left" }}
                  >
                    Cancellation Policy ©️
                  </div>
                  <div
                    style={{ margin: "20px", color: "red", textAlign: "left" }}
                  >
                    Follow safety measures advised at the hotel
                  </div>
                  <div
                    style={{ margin: "20px", color: "red", textAlign: "left" }}
                  >
                    <span style={{ color: "rgb(158,158,158)" }}>
                      {" "}
                      By proceeding, you agree to our
                    </span>{" "}
                    Guest Policies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default UserDetails;
