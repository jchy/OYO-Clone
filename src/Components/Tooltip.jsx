import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import {Banglore_cities} from "./Tooltip_city_name/Banglore_cities";
import { Chennai_cities } from './Tooltip_city_name/Chennai_cities';

import { Delhi_cities } from './Tooltip_city_name/Delhi_cities';
import { Gurgaon_cities } from './Tooltip_city_name/Gurgaon _cities';
import { Hyderabad_cities } from './Tooltip_city_name/Hyderabad_cities';
import { Kolkata_cities } from './Tooltip_city_name/Kolkata_cities';
import { Mumbai_cities } from './Tooltip_city_name/Mumbai_cities';
import { Noida_cities } from './Tooltip_city_name/Noida_cities';
import { Pune_cities } from './Tooltip_city_name/Pune_cities';
import {Link} from "react-router-dom";

import 'tippy.js/themes/light.css';
import "./Tooltip.css";
const ToolTip = ()=>{
    return(
        <>
        
        <div className="tooltip">
           <div className="tooltip_city_name">
            <Tippy offset={[140,17]} theme="light"  content={<Banglore_cities></Banglore_cities>} interactive={true}>
                    <p>Banglore</p>
                    </Tippy>
                    <ExpandMoreIcon/> 
          
            
           </div>
           <div className="tooltip_city_name">
               <Tippy offset={[140,17]}  theme="light" content={<Chennai_cities></Chennai_cities>} interactive={true}>
               <p>Chennai</p>
               </Tippy>
              
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <Tippy offset={[140,17]}  theme="light" content={<Delhi_cities></Delhi_cities>} interactive={true}>
               <p>Delhi</p>
               </Tippy>
               
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
           <Tippy offset={[140,17]}  theme="light" content={<Gurgaon_cities></Gurgaon_cities>} interactive={true}>
               <p>Gurgaon</p>
               </Tippy>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
           <Tippy offset={[140,17]}  theme="light" content={< Hyderabad_cities></Hyderabad_cities>} interactive={true}>
               <p>Hyderabad</p>
               </Tippy>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
           <Tippy offset={[140,17]}  theme="light" content={< Kolkata_cities></Kolkata_cities>} interactive={true}>

               <p>Kolkata</p>
               </Tippy>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
           <Tippy offset={[140,17]}  theme="light" content={< Mumbai_cities></Mumbai_cities>} interactive={true}>

               <p>Mumbai</p>
               </Tippy>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
           <Tippy offset={[140,17]}  theme="light" content={<Noida_cities></Noida_cities>} interactive={true}>
               <p>Noida</p>
               </Tippy>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
           <Tippy offset={[140,17]}  theme="light" content={<Pune_cities></Pune_cities>} interactive={true}>
               <p>Pune</p>
               </Tippy>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <Link to="/allcities" style={{textDecoration: "none", cursor: "pointer", color:"rgb(133, 127, 127)"}}>
                  <p>All Cities</p>
               </Link>
           </div>

        </div>
        </>
    )
}
export {ToolTip}