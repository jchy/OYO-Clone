import "./PaymentStyle.css";
import { PaymentDetail } from "./PaymentDetail";
import { PaymentCompleteClosed } from "./PaymentCompleteClosed";
import { PaymentSide } from "./PaymentSide";
import { PaymentCompleteOpen } from "./PaymentCompleteOpen";
import { PaymentInpDetail } from "./PaymentInpDetail";
import { ThreeDots } from '@agney/react-loading';
import OrderDone from "./OrderDone"
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData, sendHotelData } from "./api";
import { uuid } from "uuidv4";


export function PaymentMain() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { todos, isLoading, isError } = useSelector(state => state.Checkout);
  const { token } = useSelector(state => state.auth)
  const [confirm, setConfirm] = useState(false);
  const { id } = useParams();
  const [cardOpen, setCardOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleleave = () => {
    let payload = {
      data: todos[0],
      id: uuid(),
      userId: token
    };
    sendHotelData(payload);
    setConfirm(false);
    history.push("/");
  };

  const handleGoBack = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(getData(Number(id)))
    //
  }, []);// eslint-disable-line
  // <div style={{ height: '100vh', width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center' }}><img src="https://bit.ly/3A1IQsi" alt="hi"></img></div>
  return (
    <>
      {isLoading && <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} ><ThreeDots width="150" /></div>}
      {!isLoading && <div className="payMain">
        <div className="headerPay">
          <div>
            <img
              onClick={() => {
                history.push("/");
              }}
              src="/Images/Payment/Union.svg"
              alt="image"
            />
          </div>
        </div>
        <div className="paymentB1">
          <div className="payModify" onClick={handleGoBack}>
            {"< "} Modify your booking
          </div>
          <div className="payB1B1">
            <div className="paymentB1Main">
              <div className="paySave">
                Yay! You just saved Rs {todos[0]?.price * 2} on this booking!
              </div>
              {cardOpen ? (
                <>
                  <PaymentInpDetail setCardOpen={setCardOpen} user={user} />
                  <PaymentCompleteOpen
                    price={
                      todos[0]?.price -
                      Math.round(todos[0]?.price / 4) -
                      Math.round(todos[0]?.price / 20) +
                      399
                    }
                    setConfirm={setConfirm}
                  />
                </>
              ) : (
                <>
                  <PaymentDetail setCardOpen={setCardOpen} setUser={setUser} />
                  <PaymentCompleteClosed />
                </>
              )}
            </div>
            <PaymentSide
              payImg={todos[0]?.images}
              payDataDetail={todos[0]}
            />
          </div>
        </div>

        {confirm && <OrderDone todos={todos} handleleave={handleleave} />}
      </div>}
    </>
  );
}
