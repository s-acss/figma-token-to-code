import * as React from "react";

function Svg({name, className = ''}) {

    return (
        <svg className={`${className}`} aria-hidden="true"
             dangerouslySetInnerHTML={{__html: `<use xlink:href="#icon-${name}"></use>`}}/>

    );
}

export default Svg;
