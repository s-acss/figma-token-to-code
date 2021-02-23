import * as React from "react";
import "./index.less";

const InputRow = ({label = '', className = '', children = null}) => {
    return (
        <label className={`input-row db pr ${className}`}>
            <strong className="fs14 c:s mr8 pa df aic br4 ttc">{label}:</strong>
            {children}
        </label>
    )
};

export default InputRow;
