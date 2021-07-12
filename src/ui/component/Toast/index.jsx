import "./index.less";
import {useEffect, useState} from "preact/hooks";

function Toast({open = false, children = null, className = ''}) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(open);
    }, [open]);
    return (
        <div className={`pf df aic jcc t50% l0 w100% pl16 pr16 pen bsbb toast-box ${show ? `_show` : ''} ${className}`}>
            <div className="toast br4 c_fff pl8 pr8 fs12 lh16 pt8 pb8">{children}</div>
        </div>);
}

export default Toast;