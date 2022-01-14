import "./PaymentStyle.css";
import { PaymentDetail } from "./PaymentDetail";
import { PaymentCompleteClosed } from "./PaymentCompleteClosed";
import { PaymentSide } from "./PaymentSide";
import { PaymentCompleteOpen } from "./PaymentCompleteOpen";
import { PaymentInpDetail } from "./PaymentInpDetail";
import { ThreeDots } from '@agney/react-loading';

import { useState, useEffect } from "react";
// import { hotels } from "../db";
import { useParams, useHistory } from "react-router-dom";// eslint-disable-line


import { useDispatch, useSelector } from "react-redux";
import { getData } from "./api";
// import { loadingButtonClasses } from "@mui/lab";

var initVar = {
  days: "1",
  date: "Thu, 14 Oct - Fri, 15 Oct",
  room: "1 Room, 2 Guests",
  type: "SPOT ON NON-AC"
};

export function PaymentMain() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { todos, isLoading } = useSelector(state => state.Checkout)

  const [confirm, setConfirm] = useState(false);
  const handleleave = () => {
    setConfirm(false);
    history.push("/");
  };

  const { id } = useParams();
  const [cardOpen, setCardOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleGoBack = () => {
    history.push("/hotels");
  };
  console.log("id", id)
  useEffect(() => {
    dispatch(getData(Number(id)))
    //
  }, []);// eslint-disable-line

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
              alt=""
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
                Yay! You just saved Rs {todos[0].price * 2} on this booking!
              </div>
              {cardOpen ? (
                <>
                  <PaymentInpDetail setCardOpen={setCardOpen} user={user} />
                  <PaymentCompleteOpen
                    price={
                      todos[0].price -
                      Math.round(todos[0].price / 4) -
                      Math.round(todos[0].price / 20) +
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
              initVar={initVar}
              payImg={todos[0].images}
              payDataDetail={todos[0]}
            />
          </div>
        </div>

        {confirm && (
          <div className="payBlur">
            <div>
              <div className="paymentConfirmed">
                <div className="payTick">
                  <img src="/Images/Payment/Group.svg" alt="" />
                </div>
                <div>Booking Confirmed</div>
                <div>
                  You will receive a mail in your above mentioned email-ID
                </div>
                <div>View Order Details</div>
                <button onClick={handleleave} className="payThankYou">
                  THANK YOU
                </button>
              </div>
              <div>
                <PaymentSide
                  initVar={initVar}
                  payImg={todos[0].images}
                  payDataDetail={todos[0]}
                />
              </div>
            </div>
          </div>
        )}
      </div>}
    </>
  );
}
