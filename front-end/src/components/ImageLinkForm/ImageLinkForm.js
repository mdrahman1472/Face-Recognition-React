import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onChangeInput, onClickEvent}) => {
   return (
      <div>
         <p className="f3">
            {'This app will detect faces in your pictures. Give it a try!'}
         </p>
         <div className="center">
            <div className="form center pa4 br3 shadow-5">
               <input className="f4 pa2 w-70 center" type="text" placeholder="Enter the image's URL" onChange={onChangeInput}/>
               <button className="w-30 grow f4 link ph3 pv2 dib white bg-blue" onClick={onClickEvent}>Detect</button>
            </div>
         </div>
      </div>
   );
}
export default ImageLinkForm;