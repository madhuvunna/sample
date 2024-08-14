import React from "react";


function Modal({show,handleClose,children}){
    return(
        <div className={`model ${show ? 'show ': ' '}`}>
            <div className="model-content">
            <span className="close" onClick={handleClose}>&times;</span>
            {children}
            </div>
            
            </div>
    )

}
export default Modal;