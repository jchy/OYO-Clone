import styled from "styled-components";
import "./PaymentStyle.css";
import { useSelector } from "react-redux";


const PayImgDiv = styled.div`
  width: 80px;
  height: 69px;
  border: 1px solid #858585;
  border-radius: 4px;
  background-size: contain;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export function PaymentSide({ initVar, payDataDetail, payImg }) {
  const { room, diff, startDate, endDate, guest } = useSelector(state => state.Search)
  const multiplyValue = diff * room;
  return (
    <div className="paymentB1Side">
      <div>
        <div>
          <div className="paymentSideHead">{payDataDetail.name}</div>
          <div className="paymentSideNew">NEW</div>
          <div className="paymentSideDays">{diff} Nights</div>
        </div>
        <PayImgDiv>
          <img src={payImg[0]} alt="" />
        </PayImgDiv>
      </div>
      <div className="margin30">
        <div className="paySideIcon paySideFont14">
          <img src="/Images/Payment/Group 24.svg" alt="" />
          {startDate ? `${startDate} - ${endDate}` : "Thu, 14 Oct - Fri, 15 Oct"}
        </div>
        <div className="paySideFont14">{`${room} Room, ${guest} Guests`}</div>
      </div>
      <div className="margin30">
        <div className="paySideIcon paySideFont14">
          <img src="/Images/Payment/Type.svg" alt="" />
          {"SPOT ON NON-AC"}
        </div>
      </div>
      <div className="margin20">
        <div>Room price for 1 Night X 2 Guests</div>
        <div className="paySideFont14SlightBold">
          ₹{payDataDetail.price * 3 * multiplyValue}
        </div>
      </div>
      <div className="margin20">
        <div>Price Drop</div>
        <div className="paySideFont14SlightBold">
          -₹{payDataDetail.price * 2 * multiplyValue}
        </div>
      </div>
      <div className="margin20">
        <div>25% Coupon Discount</div>
        <div className="paySideFont14SlightBold">
          -₹{Math.round(payDataDetail.price * multiplyValue / 4)}
        </div>
      </div>
      <div className="margin20">
        <div>5% Wizard Discount</div>
        <div className="paySideFont14SlightBold">
          -₹{Math.round(payDataDetail.price * multiplyValue / 20)}
        </div>
      </div>
      <div className="margin20">
        <div>Wizard Gold at a special price </div>
        <div className="paySideFont14SlightBold">₹399</div>
      </div>

      <div>
        <div>
          <div className="paySideFinalAmt">Payable Amount</div>
          <div className="paySideFinalSideHead">inclusive of all taxes</div>
        </div>
        <div className="payAmt">
          ₹
          {payDataDetail.price * multiplyValue -
            Math.round((payDataDetail.price * multiplyValue) / 4) -
            Math.round((payDataDetail.price * multiplyValue) / 20) +
            399}
        </div>
      </div>
    </div>
  );
}
