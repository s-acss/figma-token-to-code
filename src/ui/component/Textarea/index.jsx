import "./index.less";

function Textarea({className = '', ...props}) {
    return (
        <textarea placeholder="Enter"
                  className={`textarea bsbb w100% db fs12 lh20 pt8 pb8 pr8 pl8 br4 lh20 ${className}`} {...props} />
    )
}

export default Textarea;
