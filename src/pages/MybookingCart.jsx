import { PaymentSide } from "../Components/Payment/PaymentSide";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import {fetchUserDetails} from "./api"
import Navbar2 from "../Components/Navbar2";

const MybookingCart = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  console.log(fetchUserDetails, "function");
  console.log(userId, "userId");
//   var arr= []
  useEffect(() => {
      console.log("i am")
   fetchUserDetails(userId)
   .then((res) =>{
       setData(res)
       setFlag(true);
   }
   )
  }, []);

  return (
      <>
      <Navbar2 />
      <div style={{ display: "flex", marginTop:"50px", flexWrap:"wrap",justifyContent:"center", gap:"1rem"}}>
      {flag && data.map((elem,i)=>
    <div >
      <PaymentSide payDataDetail={data[i].data} payImg={data[i].data.images}/>
    </div>
      )
      }
      </div>
  </>
  )
};
export default MybookingCart;
