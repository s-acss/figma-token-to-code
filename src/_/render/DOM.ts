import HTML from "./HTML";
import JSX from "./JSX";

const DOM = {
  render: (obj = [], isJSX) => {
    if (isJSX) {
      return JSX.getDomByArray(obj);
    }
    return HTML.getDomByArray(obj);
  }
};

export default DOM;
