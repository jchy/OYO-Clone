import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import {Banglore_cities} from "./Tooltip_city_name/Banglore_cities";
import { Chennai_cities } from './Tooltip_city_name/Chennai_cities';
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
               <p>Delhi</p>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <p>Gurgaon</p>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <p>Hyderabad</p>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <p>Kolkata</p>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <p>Mumbai</p>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <p>Noida</p>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <p>Pune</p>
              <ExpandMoreIcon/>
           </div>
           <div className="tooltip_city_name">
               <p>All Cities</p>
              
           </div>

        </div>
        </>
    )
}
export {ToolTip}