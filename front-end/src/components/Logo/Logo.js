import React from 'react';
import ai from './ai.png'
import Tilt from 'react-tilt';
import './Logo.css'

const Logo = () => {
   return (
      <div className="ma4 mt0" >
         <Tilt className="Tilt shadow-2" options={{ max : 28 }} style={{ height: 200, width: 200 }} >
            <div className="Tilt-inner"> 
               <img style={{margin:"37px"}} src={ai} alt="logo"/>
            </div>
         </Tilt>
      </div>
   );
}
export default Logo;