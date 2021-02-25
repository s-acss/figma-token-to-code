import * as React from "react";
import "./index.less";

function Input({block = false, small = false, className = '', ...props}) {
  return (
    <input type="text" placeholder="Enter" className={`input bsbb ${className} ${block ? 'w100% db' : ''} ${small ? '_s' : ''}`} {...props} />
  )
}

export default Input;
