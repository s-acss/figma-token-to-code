import * as React from "react";
import "./index.less";


function Button({block = false, small=false, className = '', ...props}) {
  return (
    <button type="button" className={`btn bsbb ${className} ${block ? 'w100% db' : ''} ${small?'_s':''}`} {...props} />
  )
}

export default Button;
