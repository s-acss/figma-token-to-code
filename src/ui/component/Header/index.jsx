import * as React from "react";
// import "./index.less";

const Header = ({children = null, extra = null}) => {
    return (
        <div className="pl8 pr8 bsbb df aic g_hr bc:fff">
            <div className="f1 c:s fs12 lh16">
                {children}
            </div>
            <div>{extra}</div>
        </div>
    )
};
export default Header;
