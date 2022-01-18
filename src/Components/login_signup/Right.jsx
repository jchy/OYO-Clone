import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { uuid } from "uuidv4";
import { loginSuccess } from "../../redux/auth/action";

export default function Right() {
    // .....Login.....
    const history = useHistory();
    const [numb, setNumb] = useState("");
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.auth);
    const handleNumbChange = (e) => {
        const numbChange = e.target.value;
        setNumb(numbChange);
    };

    const [pass, setPass] = useState("");

    const handlePassChange = (e) => {
        const passChange = e.target.value;
        setPass(passChange);
    };

    const handleLogin = () => {
        fetch(`https://oyouser.herokuapp.com/data?numb=${numb}&pass=${pass}`)
            .then((response) => response?.json())
            .then((data) => {
                console.log(data)
                if (data.length !== 0) return dispatch(loginSuccess(data[0].id, data[0].mail, data[0].numb)) && history.goBack();
                else setState(false);
            });
    };
    // ..........

    const [state, setState] = useState(true);

    // .....SignUp.....

    const [mail, setMail] = useState("");

    const handleMailChange = (e) => {
        const mailChange = e.target.value;
        setMail(mailChange);
    };

    async function sendData(data) {
        await fetch("https://oyouser.herokuapp.com/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json());
    }

    const handleSignup = () => {
        let payload = {
            numb,
            mail,
            pass,
            id: uuid()
        };
        console.log(payload, "hello")
        !numb || !mail || !pass
            ? alert("Enter Valid Details")
            : sendData(payload) && dispatch(loginSuccess(payload.id, payload.mail, payload.numb)) && history.goBack();
    };

    // ..........
    // if (isAuth) {

    //     return <Redirect to="/" />;
    // }
    return (
        <>
            <div className="promo">
                <p>Sign up & Get ₹500 OYO Money</p>
            </div>
            <div className="container">
                <h1>Login / Signup</h1>
                <p>Please enter your phone number to continue</p>

                {state ? (
                    <div>
                        <div>
                            <input type="tel" value={numb} onChange={handleNumbChange} />
                        </div>
                        <p>Password</p>
                        <div>
                            <input type="password" value={pass} onChange={handlePassChange} />
                        </div>
                        <div>
                        {(numb.length===10 && pass.length>=4)? ( <button onClick={handleLogin} style={{background:"green"}}>
                                Verify Number
                            </button>):( <button onClick={handleLogin} >
                                Verify Number
                            </button>)}
                        </div>
                        <div className="rightFooter">
                            <div>
                                <div className="hRow1"></div>
                                <div className="signInAs">Or Sign in as</div>
                                <div className="hRow2"></div>
                            </div>
                            <div className="other">
                                <div className="border">
                                    <p>Travel Agent</p>
                                    <div>
                                        <div className="arrow"></div>
                                    </div>
                                </div>
                                <div>
                                    <p>Corporate</p>
                                    <div>
                                        <div className="arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <input type="tel" value={numb} onChange={handleNumbChange} />
                        </div>
                        <p>E-mail</p>
                        <div>
                            <input type="email" value={mail} onChange={handleMailChange} />
                        </div>
                        <p>Password</p>
                        <div>
                            <input type="password" value={pass} onChange={handlePassChange} />
                        </div>
                        <div>
                            {(numb.length===10 && pass.length>=4 && mail)? ( <button onClick={handleSignup} style={{background:"green"}}>
                                Verify Number
                            </button>):( <button onClick={handleSignup} >
                                Verify Number
                            </button>)}
                           
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
