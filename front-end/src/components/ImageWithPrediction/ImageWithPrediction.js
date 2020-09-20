import React from 'react';
import './ImageWithPrediction.css'

export const ImageWithPrediction = ({imgSrc, box, concepts}) => {
   return (
      <div className="center ma">
      { imgSrc === "" ? null :
            <div className="absolute mt3">
               <img
                  className="img-size shadow-3"
                  style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                  id="img-id"
                  src={imgSrc}
                  alt=""
               />
               <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
               <div className="concepts">
                  <ul className="list shadow-3 white bg-concepts ">
                     <li className="ma2">{concepts.gender}</li>
                     <li className="bb bt ma2 pa1">AGE {concepts.age}</li>
                     <li>{concepts.race}</li>
                  </ul>
               </div>
            </div>
      }
      </div>
   );
}
export default ImageWithPrediction;
