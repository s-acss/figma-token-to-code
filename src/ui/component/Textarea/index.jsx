import * as React from "react";
import "./index.less";

function Textarea({className = '', ...props}) {
  return (
    <textarea placeholder="Enter" className={`textarea bsbb w100% db fs14 lh20 pt8 pb8 pr8 pl8 br4 lh20 ${className}`} {...props} />
  )
}

export default Textarea;
