import React from 'react'
import { useState, useEffect } from 'react'

export default function Right() {

    // .....Login.....

    const [numb, setNumb] = useState("")

    const handleNumbChange = (e) => {
        const numbChange = e.target.value
        setNumb(numbChange)
    }

    const [pass, setPass] = useState("")

    const handlePassChange = (e) => {
        const passChange = e.target.value
        setPass(passChange)
    }

    const [datas, setDatas] = useState([])

    async function getData() {
        await fetch("http://localhost:3001/data")
        .then(response => response.json())
        .then(data => setDatas(data));
    }

    useEffect(() => {
        getData()
    }, [])

    const handleLogin = () => {
        var coin = false
        for ( var i = 0; i < datas.length; i++ ) {

            if ( datas[i].numb === numb && datas[i].pass === pass ) {
                coin = true
                break;
            }
        }
        { coin ? console.log("Add Next Page") : setState(false) }          //Add next page here ( In place of console.log("Add Next Page"))
        setPass("")
    }

    // ..........

    const [state, setState] = useState(true)

    // .....SignUp.....

    const [mail, setMail] = useState("")

    const handleMailChange = (e) => {
        const mailChange = e.target.value
        setMail(mailChange)
    }

    async function sendData(data) {
        await fetch("http://localhost:3001/data", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
    }

    const handleSignup = () => {
        { numb === "" || mail === "" || pass === "" ? alert("Enter Valid Details") :  sendData({numb, mail, pass}) && console.log("ADD Next Page")  }               //Add next page here ( In place of console.log("Add Next Page"))
    }

    // ..........

    return (
        <>
            <div className='promo'>
                <p>Sign up & Get ₹500 OYO Money</p>
            </div>
            <div className='container'>
                <h1>Login / Signup</h1>
                <p>Please enter your phone number to continue</p>
                
                { state ?
                    <div>
                        <div>
                            <input type="tel" value={numb} onChange={handleNumbChange} />
                        </div>
                        <p>Password</p>
                        <div>
                            <input type="password" value={pass} onChange={handlePassChange} />
                        </div>
                        <div>
                            <button onClick={handleLogin} disabled={!numb || !pass}>Verify Number</button>
                        </div>
                        <div className='rightFooter'>
                            <div>
                                <div className='hRow1'></div>
                                <div className='signInAs'>Or Sign in as</div>
                                <div className='hRow2'></div>
                            </div>
                            <div className='other'>
                                <div className='border'>
                                    <p>Travel Agent</p>
                                    <div>
                                        <div className='arrow'></div>
                                    </div>
                                </div>
                                <div>
                                    <p>Corporate</p>
                                    <div>
                                        <div className='arrow'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div>
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
                            <button onClick={handleSignup} disabled={!numb || !pass || !mail}>Verify Number</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}