import React from 'react'

function Alert(props) {
   const capitalize = (word) =>{
        if(word=== 'danger'){
            word = 'error';
        }
       const lower = word.toLowerCase();
       return lower.chaAt(0).toUpperCase() + lower.slice(1);
   }  

  return (
         props.alert && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">
          <strong> {props.alert.type} </strong>: {props.alert.msg}
         </div>
  )
}

export default Alert; 