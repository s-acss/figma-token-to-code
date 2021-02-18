import * as React from "react";

function Tabs({className = '', data, tabIndex, onChange}) {
  return (
    <div className={`c_xs fw700 lh1.5 ${className}`}>
      {data.map((item, index) => (
        <a href="##" key={item}
           title={item}
           className={`dib vat pt8 pb8 pl8 pr8 ${index === tabIndex ? 'c_m' : 'c_m:h'}`}
           onClick={(e) => {
             e.preventDefault();
             onChange(index);
           }}>{item}</a>))}
    </div>
  )
};

export default Tabs;
