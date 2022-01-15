// import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
  }, [itemDetails.id]);
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
        <h2>giii</h2>
      </div>
    </>
  );
}

export default UserDetails;
