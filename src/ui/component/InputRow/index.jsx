import * as React from "react";
import "./index.less";

const InputRow = ({label = '', className = '', children = null, ...rest}) => {
  return (
    <label className={`input-row db pr ${className}`} {...rest}>
      <strong className="fs14 c:s mr8 pa df aic br4">{label}:</strong>
      {children}
    </label>
  )
};

export default InputRow;
