import "./Banglore_cities.css";
import {useHistory} from "react-router-dom";
const Banglore_cities = ()=>{
    const history = useHistory();
    return(
        <div className="main_div">
            <h2 className="city">Popular Localities</h2>
            <p className="city" onClick={()=>{
                history.push("/profile");
            }}>Koramangala</p>
            <p className="city">Indiranagar</p>
            <p className="city">Marathahalli</p>
            <p className="city">Majestic</p>
            <p className="city">Whitefield</p>
            <p className="city">Hebbal</p>
            <p className="city">Madiwala</p>
            <p className="city">Jayanagar</p>
            <p className="city">All of Banglore</p>
           
        </div>
    )
}
export {Banglore_cities}