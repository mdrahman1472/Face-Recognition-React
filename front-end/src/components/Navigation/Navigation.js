import React from 'react';

export const Navigation = ({onRouteChange}) => {
   return (
      <nav style={{ display: "flex", justifyContent: "flex-end"}} >
         <p className="f3 link dim ba pa3 br2 pointer ma3" onClick = {() => onRouteChange('signin')} >Sign Out</p>
      </nav>
   );
}