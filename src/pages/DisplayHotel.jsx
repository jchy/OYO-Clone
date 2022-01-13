import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import WifiIcon from "@mui/icons-material/Wifi";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import ElevatorIcon from "@mui/icons-material/Elevator";
import styles from "./todolist.module.css";
import TextField from "@mui/material/TextField";
// import {
//   getHotelRoomFailure,
//   getHotelRoomRequest,
//   getHotelRoomSuccess,
//   removeHotelRoom,
//   toggleHotelRoom
// } from "../redux/app/action";
import { getHotelRooms } from "./api";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
function valuetext(value) {
  return `${value}`;
}

function HotelItem({
  name,
  location,
  city,
  description,
  rating,
  price,
  poster,
  images,
  discount
}) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{ display: "flex" }}>
          <div>
            <img src={poster} alt="img" height="76%" width="96%" />
          </div>
          <div style={{ width: "10%" }}>
            <img src={images[1]} alt="img" height="95px" width="120px" />
            <img src={images[0]} alt="img" height="95px" width="120px" />
            <img src={images[2]} alt="img" height="95px" width="120px" />
          </div>
          <div style={{ marginLeft: "40px", textAlign: "left" }}>
            <div>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>
                {name}
              </span>
            </div>
            <p>{location}</p>
            <div style={{ display: "flex" }}>
              <div>
                <button
                  style={{
                    background: "rgb(82,181,32)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px"
                  }}
                >
                  {rating}★
                </button>
                ({rating * 10} Ratings) .{rating > 4 ? "Very Good" : "Good"}
              </div>
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
            <div style={{ display: "flex" }}>
              <div>{rating > 4 ? "WIZARD MEMBER" : "Vaccinated Staff"}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <div>
                  <p style={{ lineHeight: "5px" }}>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "rgb(238,42,35)"
                      }}
                    >
                      ₹{price}
                    </span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontSize: "10px",
                        lineHeight: "25px",
                        color: "rgb(180,186,188)"
                      }}
                    >
                      ₹{((price * 100) / (100 - discount)).toFixed(2)}
                    </span>
                    <span style={{ color: "rgb(244,165,34)" }}>
                      {discount}% off
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "rgb(163,169,172)",
                      fontSize: "12px"
                    }}
                  >
                    per room per night
                  </p>
                </div>
              </div>
              <div style={{ marginLeft: "40px" }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="out"
                    style={{ color: "balck", border: "1px solid black" }}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    style={{ background: "rgb(25,181,79)" }}
                  >
                    Book Now
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DisplayHotel() {
  const [mail, setMail] = React.useState("e.g. abc@gmail.com");
  const [sortBy, setSortBy] = useState("popularity");
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { hotelDataArray, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelRooms());
  }, []);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  switch (sortBy) {
    case "rating": {
      hotelDataArray.sort((a, b) => a.rating - b.rating);
      break;
    }
    case "lowtohigh": {
      hotelDataArray.sort((a, b) => a.price - b.price);
      break;
    }
    case "hightolow": {
      hotelDataArray.sort((a, b) => b.price - a.price);
      break;
    }
    case "popularity": {
      hotelDataArray.sort((a, b) => a.popularity - b.popularity);
      break;
    }
    default:
      return hotelDataArray;
  }
  // };

  return (
    <>
      <div
        style={{
          background: "rgb(222,150,64)",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div>
          <span style={{ fontSize: "30px" }}>⚠</span>
        </div>
        <div style={{ padding: "12px" }}>
          <span style={{ fontSize: "12px", lineHeight: "16px" }}>
            Please check the travel advisory issued by the concerned state
            government/local authorities before booking, as some places may have
            COVID-19 related travel/lodging restrictions.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          textAlign: "left"
        }}
      >
        <div
          style={{
            width: "20%",
            borderRight: "1px solid grey",
            paddingRight: "20px"
          }}
        >
          <div>
            <h2>Filters</h2>
          </div>
          <div>
            <h5>Popular locations in Delhi, India</h5>
          </div>
          <div style={{ margin: "10px" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ padding: "10px" }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Mahipalpur
            </Button>
          </div>
          <div style={{ margin: "10px" }}>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Paharganj
            </Button>
          </div>
          <div style={{ margin: "10px" }}>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              New Delhi Railway Station
            </Button>
          </div>
          <div style={{ margin: "10px" }}>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Karol Bagh
            </Button>
          </div>
          <div style={{ margin: "10px" }}>
            <Button
              variant="outlined"
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none"
              }}
            >
              Dwarka, New Delhi
            </Button>
          </div>
          <div style={{ margin: "10px" }}>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600"
                }}
              >
                + View More
              </Button>
            </div>
            <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
            <div>
              <h4>Price </h4>
              <Box>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </div>
          </div>
          <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
          <div>
            <h4>Collections</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                fontSize: "12px",
                fontWeight: "200"
              }}
            >
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="sanitised b4 ur eyes"
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="vaccinated Staff"
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Family OYOs"
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="For Group Travellers"
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Near Airport"
                  />
                </FormGroup>
              </div>
              <div>
                <Button
                  variant="outlined"
                  style={{
                    background: "none",
                    color: "red",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: "600"
                  }}
                >
                  + View More
                </Button>
              </div>
            </div>
            <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
            <h4>Categories</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                fontWeight: "300",
                fontSize: "12"
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "18px",
                      width: "18px",
                      cursor: "pointer"
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}> OYO Rooms</span>
                  <span style={{ lineHeight: "25px", fontSize: "14px" }}>
                    - Super affordable stays with essential aminities
                  </span>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "18px",
                      width: "18px",
                      cursor: "pointer"
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}> Premium</span>
                  <span style={{ lineHeight: "25px", fontSize: "14px" }}>
                    - Hotel at prime location and premium aminities
                  </span>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "18px",
                      width: "18px",
                      cursor: "pointer"
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}> Townhouse </span>
                  <span style={{ lineHeight: "25px", fontSize: "14px" }}>
                    - Your friendly, premium neighbourhood hotel-Serviced by OYO
                  </span>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "18px",
                      width: "18px",
                      cursor: "pointer"
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}> Flagship </span>
                  <span style={{ lineHeight: "25px", fontSize: "14px" }}>
                    - Affordable hotels at prime locations - Serviced by OYO
                  </span>
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "18px",
                      width: "18px",
                      cursor: "pointer"
                    }}
                  />{" "}
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {" "}
                    OYOX Design{" "}
                  </span>{" "}
                  <span style={{ lineHeight: "25px", fontSize: "14px" }}>
                    - Beautiful designed private crafted for the traveller who
                    craves comfort
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600"
                }}
              >
                + View More
              </Button>
            </div>
            <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
            <h4>Acoomodation Type</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                OYO Home
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                Hotel
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600"
                }}
              >
                + View More
              </Button>
            </div>
            <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
            <h4>Hotel Facilities</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                Area
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                AC
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                Full Sized Bed
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" /> Seating
                King Sized Bed
              </div>
              <div>Queen Sized Bed</div>
            </div>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                background: "none",
                color: "red",
                border: "none",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              + View More
            </Button>
          </div>
          <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
          <div style={{ display: "flex" }}>
            <div>
              <img src="./images/w-logo.png" alt="img" height="30px" />
            </div>
            <div>
              <p>Wizard Member OYOs</p>
              <p>Get 5% off on member hotels</p>
              <div>
                <Button
                  variant="outlined"
                  style={{
                    background: "rgb(242,242,242)",
                    color: "black",
                    border: "none"
                  }}
                >
                  Show Only Wizard Member OYOs
                </Button>
              </div>
            </div>
          </div>
          <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
          <h4>Check-in features</h4>
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Pay at Hotel"
              />
            </FormGroup>
          </div>
        </div>

        <div
          style={{
            width: "80%",
            margin: "auto",
            paddingLeft: "20px"
          }}
        >
          {isLoading && <h3>Loading...</h3>}
          {isError && <h3> Something went wrong!</h3>}

          <div
            style={{
              display: "flex",
              marginBottom: "30px",
              justifyContent: "left"
            }}
          >
            <div>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>
                1258 OYOs in Delhi, India
              </span>
              <span style={{ marginLeft: "100px" }}> Map View </span>
              <span style={{ marginLeft: "8px" }}>
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </span>
              <span style={{ marginLeft: "100px" }}>Sort By </span>
              <span>
                <select
                  onChange={handleSortBy}
                  name="sort"
                  id="sort"
                  style={{ padding: "10px" }}
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Guest Ratings</option>
                  <option value="lowtohigh">Price Low To High</option>
                  <option value="hightolow">Price High To Low</option>
                </select>
              </span>
            </div>
          </div>
          <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
          <div style={{ height: "1960px", overflowY: "scroll" }}>
            {hotelDataArray.map((item) => (
              <HotelItem key={item.id} {...item} />
            ))}
          </div>
          <hr style={{ border: ".2px solid rgb(224,224,224)" }} />
          <div
            style={{
              border: "1px solid rgb(224,224,224)",
              borderRadius: "10px",
              padding: "50px",
              marginTop: "20px"
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <img src="./images/fireLogo.png" alt="img" height="60px" />
              </div>
              <div>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>
                    Get access to exclusive deals
                  </span>
                </div>
                <div>
                  <span style={{ color: "rgb(127,127,127)" }}>
                    Only the best deals reach your inbox
                  </span>
                </div>
              </div>
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Your email"
                    value={mail}
                    onChange={handleMailChange}
                  />
                </Box>
              </div>
              <div style={{ padding: "10px" }}>
                <Button
                  variant="outlined"
                  style={{
                    background: "red",
                    color: "white",
                    border: "1px solid red",
                    padding: "13px",
                    width: "150px"
                  }}
                >
                  Notify me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayHotel;
