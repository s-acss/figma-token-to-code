import * as React from "react";
import "./index.less";


function Button({block = false, square = false, className = '', ...props}) {
  const classNames = [...new Set(['btn', className, block ? '_block' : '', square ? '_square' : ''])].join(' ');
  return (
    <button type="button" className={classNames} {...props} />
  )
}

export default Button;
