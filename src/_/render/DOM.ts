import HTML from "./HTML";
import JSX from "./JSX";

const DOM = {
    render: (obj, isJSX) => {
        if (isJSX) {
            return JSX.getItemDom(obj);
        }
        return HTML.getItemDom(obj);
    }
};

export default DOM;
