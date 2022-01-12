import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import WifiIcon from "@mui/icons-material/Wifi";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import ElevatorIcon from "@mui/icons-material/Elevator";
// import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
// import styles from "./todolist.module.css";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../redux/app/action";
import { getTodos } from "./api";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function valuetext(value) {
  return `${value}`;
}

function TodoItem({
  name,
  location,
  city,
  description,
  rating,
  price,
  poster,
  images
}) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{ display: "flex" }}>
          <div>
            <img src={poster} alt="img" height="60%" width="96%" />
          </div>
          <div style={{ width: "10%" }}>
            <img src={images[1]} alt="img" height="95px" width="120px" />
            <img src={images[0]} alt="img" height="95px" width="120px" />
            <img src={images[2]} alt="img" height="95px" width="120px" />
          </div>
          <div style={{ marginLeft: "40px", textAlign: "left" }}>
            <h2>{name}</h2>
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
          </div>
        </div>
      </div>
    </>
  );
}

function TodoList() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <div>
            <h2>Filters</h2>
          </div>
          <div>
            <h5>Popular locations in Delhi, India</h5>
          </div>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none"
                }}
              >
                + View More
              </Button>
            </div>
            <hr />
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
          <hr />
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
                    border: "none"
                  }}
                >
                  + View More
                </Button>
              </div>
            </div>
            <hr />
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
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> OYO Rooms</span> - Super
                affordable stays with essential aminities
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> Premium</span> - Hotel at
                prime location and premium aminities
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> Townhouse </span> - Your
                friendly, premium neighbourhood hotel-Serviced by OYO
              </div>
              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> Flagship </span> -
                Affordable hotels at prime locations - Serviced by OYO
              </div>

              <div>
                <input type="checkbox" name="OYO Rooms" label="Oyo" />{" "}
                <span style={{ fontWeight: "600" }}> OYOX Design </span> -
                Beautiful designed private crafted for the traveller who craves
                comfort
              </div>
            </div>

            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "red",
                  border: "none"
                }}
              >
                + View More
              </Button>
            </div>
            <hr />
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
                  border: "none"
                }}
              >
                + View More
              </Button>
            </div>
            <hr />
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
                border: "none"
              }}
            >
              + View More
            </Button>
          </div>
          <hr />
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
          <hr />
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
            margin: "auto"
          }}
        >
          {isLoading && <h3>Loading...</h3>}
          {isError && <h3> Something went wrong!</h3>}
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              // onDelete={handleDelete}
              // onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
