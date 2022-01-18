import { PaymentSide } from "../Components/Payment/PaymentSide";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import {fetchUserDetails} from "./api"

const MybookingCart = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
//   console.log(userId);
//   var arr= []
  useEffect(() => {
   fetchUserDetails(userId)
   .then((res) =>
   setData(res[0])
   )
  }, []);

//   console.log(data.data,"data");
//   console.log(data.data.images, "image");

  return (
    <div style={{ display: "flex", justifyContent: "center",alignItems: "center", marginTop:"120px"}}>
      <PaymentSide payDataDetail={data.data} payImg={data.data.images}/>
    </div>
  );
};
export default MybookingCart;
