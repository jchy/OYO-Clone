import React from 'react'
import './PaymentStyle.css'
import { PaymentSide } from "./PaymentSide";

const OrderDone = ({ todos, handleleave }) => {
    return (
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
                    <button onClick={() => handleleave()} className="payThankYou">
                        THANK YOU
                    </button>
                </div>
                <div>
                    <PaymentSide
                        payImg={todos[0].images}
                        payDataDetail={todos[0]}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderDone
